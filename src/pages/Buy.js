import React, { useEffect, useState } from "react";
import { useFormatTime } from "../hooks/useFormatTime";

export const Buy = ({ provider, contract, web3 }) => {
  const [fetchAuctions, setFetchAuctions] = useState([]);
  const [offer, setOffer] = useState(""); // Initialize offer as an empty string
  const [touched, setTouched] = useState(false);
  const [activeOffers, setActiveOffers] = useState({}); // Track offer state for each auction

  const { formatDate } = useFormatTime();

  useEffect(() => {
    const fetchAllAuctions = async () => {
      if (provider) {
        try {
          const allAuctions = await contract.methods.getAuctions().call();
          setFetchAuctions(allAuctions);
          console.log("Fetched all auctions successfully: ", allAuctions);
        } catch (error) {
          console.error("Failed to fetch all auctions: ", error);
        }
      }
    };

    fetchAllAuctions();
  }, [contract]);

  const makeOffer = async (auctionId) => {
    try {
      if (offer) {
        await contract.methods
          .makeOffer(auctionId, web3.utils.toWei(offer, "ether"))
          .send({ from: provider.selectedAddress });
      }
    } catch (error) {
      console.error("Failed to send the offer: ", error);
    }
  };

  const handleBlur = () => {
    setTouched(true); // Mark the input as touched when user clicks outside
  };

  const toggleOffer = (auctionId) => {
    setActiveOffers((prevActiveOffers) => ({
      ...prevActiveOffers,
      [auctionId]: !prevActiveOffers[auctionId], // Toggle active offer state for the specific auction
    }));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {fetchAuctions.map((auction) => {
        const isOwner =
          provider?.selectedAddress?.toLowerCase() ===
          auction.seller?.toLowerCase();

        return (
          <div
            className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between"
            key={auction.id}
          >
            <h2 className="text-xl font-bold mb-4 text-center">
              Place an Offer
            </h2>

            {/* Auction Details Display */}
            <div className="mb-4 p-4 border rounded-md bg-gray-50">
              <h3 className="font-bold text-lg mb-2">{auction.name}</h3>
              <p className="text-sm mb-1">{auction.description}</p>
              <p className="text-sm mb-2">
                Minimum Price:
                <span className="font-semibold">
                  {web3.utils.fromWei(auction.min, "ether")} ETH
                </span>
              </p>
              <p className="text-sm">
                Ends At:
                <span className="font-semibold">
                  {formatDate(Number(auction.end))}
                </span>
              </p>
            </div>

            {isOwner ? (
              <p className="text-red-500 font-semibold text-center">
                You cannot buy your own item.
              </p>
            ) : !activeOffers[auction.id] ? (
              <div className="flex flex-col items-center gap-4 w-full">
                <h1>If you want to offer, click this</h1>
                <button
                  className="bg-[#0075c6] hover:bg-[#3628e5] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 max-lg:text-[10px]"
                  onClick={() => toggleOffer(auction.id)} // Toggle the active state for the specific auction
                >
                  Enable
                </button>
              </div>
            ) : (
              <>
                {/* Offer Price Input */}
                <div className="mb-4">
                  <label className="text-sm font-medium text-gray-700 flex flex-row justify-between">
                    <p>Offer Price (ETH)</p>
                    <button
                      className="text-red-500"
                      onClick={() => toggleOffer(auction.id)}
                    >
                      X
                    </button>
                  </label>
                  <input
                    type="number"
                    value={offer}
                    onChange={(e) => setOffer(e.target.value)}
                    onBlur={handleBlur} // Trigger onBlur event
                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm 
                ${touched && !offer ? "border-red-500" : "border-gray-300"}`} // Apply red border if empty and touched
                    placeholder="Enter your offer price"
                  />
                </div>
                {/*  Submit Offer Button */}
                <button
                  onClick={() => makeOffer(auction.id)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Place Offer
                </button>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};
