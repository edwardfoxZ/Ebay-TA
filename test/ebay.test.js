let chai, expect;

before(async () => {
  chai = await import("chai");
  expect = chai.expect;
});

const Ebay = artifacts.require("Ebay");

contract("Ebay", (accounts) => {
  let ebay;
  const [owner, user1, user2] = accounts;

  beforeEach(async () => {
    ebay = await Ebay.new();
  });

  it("should create an auction successfully", async () => {
    await ebay.createAuction("Auction 1", "Description 1", 100, 86401, {
      from: owner,
    });
    const auction = await ebay.auctions(1);

    expect(auction.id.toNumber()).to.equal(1);
    expect(auction.name).to.equal("Auction 1");
    expect(auction.description).to.equal("Description 1");
    expect(auction.min.toNumber()).to.equal(100);
  });

  it("should fail if min price is zero", async () => {
    try {
      await ebay.createAuction("Auction 2", "Description 2", 0, 86401, {
        from: owner,
      });
    } catch (error) {
      expect(error.message).to.include("min price must be greater than 0");
    }
  });

  it("should allow making an offer", async () => {
    await ebay.createAuction("Auction 1", "Description 1", 100, 86401, {
      from: owner,
    });
    await ebay.makeOffer(1, { from: user1, value: 200 });
    const offer = await ebay.offers(1);

    expect(offer.price.toNumber()).to.equal(200);
  });
});
