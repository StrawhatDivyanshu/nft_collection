### Read Me - NFT Collection Project

#### Project Title
**NFT Collection Manager**

#### Description

The **NFT Collection Manager** is a JavaScript-based project designed to simulate a simplified NFT (Non-Fungible Token) minting and management system. This project creates an array of NFT objects, each containing essential metadata, and includes functions for minting new NFTs, listing them, and calculating the total supply of NFTs created.

This program does not use blockchain technology but serves as a conceptual model of an NFT collection, perfect for beginners to understand NFT fundamentals and array manipulation in JavaScript.

#### Features

1. **Mint NFTs**: Adds a new NFT object to the collection with customizable metadata (name, artist, year, and description).
2. **List NFTs**: Prints each NFT’s metadata to the console, making it easy to see all NFTs in the collection.
3. **Total Supply**: Returns the total number of NFTs minted in the collection.

---

### Getting Started

This project requires a JavaScript environment. You can run the code directly in the console of any web browser or in a JavaScript IDE.

#### Example Usage

The following steps walk through creating, listing, and counting NFTs.

1. **Mint NFTs**:
   Use the `mintNFT` function to add a new NFT to the collection by providing:
   - `name`: Title of the NFT artwork.
   - `artist`: Name of the artist.
   - `year`: Year of creation.
   - `description`: Brief description of the NFT.

   Example:
   ```javascript
   mintNFT("The Starry Night", "Vincent van Gogh", 1889, "A famous painting by Vincent van Gogh.");
   ```

2. **List All NFTs**:
   Call `listNFTs()` to print all NFT metadata in the collection to the console.
   
   Example output:
   ```
   Name: The Starry Night
   Artist: Vincent van Gogh
   Year: 1889
   Description: A famous painting by Vincent van Gogh.
   --------------------------
   ```

3. **Get Total Supply**:
   Call `getTotalSupply()` to get the total count of NFTs in the collection.

   Example output:
   ```
   Total Supply: 3
   ```

### Code Explanation

#### 1. **mintNFT Function**
   - **Purpose**: Creates a new NFT object with specific metadata and stores it in the `nftCollection` array.
   - **Usage**: `mintNFT(name, artist, year, description)`

#### 2. **listNFTs Function**
   - **Purpose**: Loops through the `nftCollection` array and prints each NFT’s details to the console.
   - **Usage**: `listNFTs()`

#### 3. **getTotalSupply Function**
   - **Purpose**: Returns the total number of NFTs minted by checking the length of `nftCollection`.
   - **Usage**: `getTotalSupply()`

---

### Example Code

```javascript
// Mint some NFTs
mintNFT("The Starry Night", "Vincent van Gogh", 1889, "A famous painting by Vincent van Gogh.");
mintNFT("Mona Lisa", "Leonardo da Vinci", 1503, "A portrait of a woman by Leonardo da Vinci.");
mintNFT("The Persistence of Memory", "Salvador Dalí", 1931, "A painting by Salvador Dalí featuring melting clocks.");

// List all NFTs
listNFTs();

// Print the total number of NFTs minted
console.log("Total Supply: " + getTotalSupply());
```

### Troubleshooting

- **NFT Not Appearing in Collection**: Ensure you are using `mintNFT` with valid parameters to add NFTs to the collection.
- **Total Supply Not Updating**: Check if NFTs are being added to the `nftCollection` array correctly.
  
For further help, consult JavaScript documentation for working with arrays and functions.
