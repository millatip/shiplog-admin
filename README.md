

# ShipLog Admin DApp

ShipLog Admin DApp is a decentralized application (DApp) that provides administrative functionality for managing maritime logistics. It allows users to interact with smart contracts on the Ethereum blockchain to perform various administrative tasks related to cargo tracking, scheduling, verification, fee settlement, and more.

## Features

- **Cargo Management:** Register, update, and delete cargo information such as cargo type, destination, expected arrival time, and additional details.
- **Cargo Schedule:** Schedule cargo loading and unloading, update the status of cargo schedules, and retrieve cargo schedule information.
- **Cargo Verification:** Verify cargo contents, value, and destination to ensure compliance and security.
- **Fee Settlement:** Initiate and settle fees for cargo transport services.
- **Vessel Fleet Management:** Update and retrieve the current location and estimated time of arrival for vessels carrying cargo.
- **User Interface:** Provides a user-friendly web interface for interacting with the application and smart contracts.

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/millatip/shiplog-admin.git
   ```

2. Navigate to the project directory:

   ```bash
   cd shiplog-admin
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the development server:

   ```bash
   npm run serve
   ```

   This will compile the project and start a local development server.

2. Access the application:

   Open your web browser and visit `http://localhost:8080` to access the ShipLog Admin DApp.

## Smart Contracts

The smart contracts used by the ShipLog Admin DApp are located in the [contracts](contracts) directory. They are written in Solidity, the programming language for Ethereum smart contracts.

To interact with the smart contracts, you will need an Ethereum development environment such as Truffle and Ganache. Refer to the [documentation](https://www.trufflesuite.com/docs) for detailed instructions on setting up the development environment.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

