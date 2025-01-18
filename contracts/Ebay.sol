// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Ebay {
    struct Auction {
        uint id;
        address payable seller;
        string name;
        string description;
        uint min;
        uint end;
        uint bestOfferId;
        uint[] offerIds;
    }

    struct Offer {
        uint id;
        uint auctionId;
        address payable buyer;
        uint price;
    }

    mapping(uint => Auction) public auctions;
    mapping(uint => Offer) public offers;
    mapping(address => uint[]) private usersAuctions;
    mapping(address => uint[]) private usersOffers;

    uint private nextAuctionId = 1;
    uint private nextOfferId = 1;

    function createAuction(
        string calldata _name,
        string calldata _desicirption,
        uint _min,
        uint _duration
    ) external {
        require(_min > 0, "min price must be greater than 0");
        require(
            _duration > 86400 && _duration < 864000,
            "_duration must be comprised between 1 to 10 days"
        );

        uint[] memory offerIds = new uint[](0);
        auctions[nextAuctionId] = Auction(
            nextAuctionId,
            payable(msg.sender),
            _name,
            _desicirption,
            _min,
            block.timestamp + _duration,
            0,
            offerIds
        );

        nextAuctionId++;
    }

    function makeOffer(uint _auctionId) external payable {
        Auction storage auction = auctions[_auctionId];
        Offer storage bestOffer = offers[auction.bestOfferId];
        require(block.timestamp < auction.end, "alreay ended");
        require(
            msg.value >= auction.min && msg.value > bestOffer.price,
            "msg.value must be greater than min auction and zero"
        );
        auction.bestOfferId = nextOfferId;
        auction.offerIds.push(nextOfferId);
        offers[nextOfferId] = Offer(
            nextOfferId,
            _auctionId,
            payable(msg.sender),
            msg.value
        );

        nextOfferId++;
    }

    function trade(uint _auctionId) external auctionExists(_auctionId) {
        Auction storage auction = auctions[_auctionId];
        Offer storage bestOffer = offers[auction.bestOfferId];
        require(block.timestamp > auction.end, "not ended");
        for (uint i = 0; i < auction.offerIds.length; i++) {
            uint offerId = auction.offerIds[i];
            if (offerId != auction.bestOfferId) {
                Offer storage offer = offers[offerId];
                offer.buyer.transfer(offer.price);
            }
        }
        auction.seller.transfer(bestOffer.price);
    }

    function getAuctions() external view returns (Auction[] memory) {
        Auction[] memory _auctions = new Auction[](nextAuctionId - 1);
        for (uint i = 1; i < nextAuctionId - 1; i++) {
            _auctions[i - 1] = auctions[i];
        }
        return (_auctions);
    }

    function getUsersAuctions(
        address _user
    ) external view returns (Auction[] memory) {
        uint[] storage usersAuctionIds = usersAuctions[_user];
        Auction[] memory _auctions = new Auction[](usersAuctionIds.length);
        for (uint i = 0; i < usersAuctionIds.length; i++) {
            uint auctionId = usersAuctionIds[i];
            _auctions[i] = auctions[auctionId];
        }

        return _auctions;
    }

    function getUsersOffers(
        address _user
    ) external view returns (Offer[] memory) {
        uint[] storage usersOfferIds = usersOffers[_user];
        Offer[] memory _offers = new Offer[](usersOfferIds.length);
        for (uint i = 0; i < usersOfferIds.length; i++) {
            uint offerId = usersOfferIds[i];
            _offers[i] = offers[offerId];
        }

        return _offers;
    }

    modifier auctionExists(uint _auctionId) {
        require(
            _auctionId > 0 && _auctionId < nextAuctionId,
            "Auction is not existed"
        );
        _;
    }
}
