let nftCollection = [];

function mintNFT(name, artist, year, description) {
    // Create an NFT object with the provided metadata
    let nft = {
        name: name,
        artist: artist,
        year: year,
        description: description
    };
    // Store the NFT in the nftCollection array
    nftCollection.push(nft);
}

function listNFTs() {
    // Loop through the nftCollection array and print each NFT's metadata
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("Name: " + nftCollection[i].name);
        console.log("Artist: " + nftCollection[i].artist);
        console.log("Year: " + nftCollection[i].year);
        console.log("Description: " + nftCollection[i].description);
        console.log("--------------------------");
    }
}

function getTotalSupply() {
    return nftCollection.length;
}

// Example usage:
mintNFT("The Starry Night", "Vincent van Gogh", 1889, "A famous painting by Vincent van Gogh.");
mintNFT("Mona Lisa", "Leonardo da Vinci", 1503, "A portrait of a woman by Leonardo da Vinci.");
mintNFT("The Persistence of Memory", "Salvador Dalí", 1931, "A painting by Salvador Dalí featuring melting clocks.");

// List all NFTs
listNFTs();

// Print the total number of NFTs minted
console.log("Total Supply: " + getTotalSupply());
