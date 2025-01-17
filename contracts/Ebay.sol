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

    mapping(uint => Auction) private auctions;
    mapping(uint => Offer) private offers;

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

    function makeOffer(uint _auctionId) external {
        Auction storage auction = auctions[_auctionId];
    }
}
