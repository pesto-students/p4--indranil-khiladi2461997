-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 27, 2022 at 07:21 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dharmik_week12`
--

-- --------------------------------------------------------

--
-- Table structure for table `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `city` char(20) NOT NULL,
  `state` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cities`
--

INSERT INTO `cities` (`id`, `city`, `state`) VALUES
(1, 'surat', 'Gujarat'),
(2, 'thane', 'mumbai');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `customer_name` char(20) NOT NULL,
  `customer_addr` char(20) NOT NULL,
  `customer_city` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `customer_name`, `customer_addr`, `customer_city`) VALUES
(1, 'Suresh', 'amroli', 'surat'),
(2, 'Ramesh', 'saroli', 'surat');

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE `items` (
  `item_no` int(11) NOT NULL,
  `item_desc` text NOT NULL,
  `item_weight` decimal(5,2) NOT NULL,
  `item_cost` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_no`, `item_desc`, `item_weight`, `item_cost`) VALUES
(1, 'asdfghjkl', '5.64', '250.22'),
(2, 'likuydsecdvfbn', '56.00', '50.20');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_no` int(11) NOT NULL,
  `order_date` date NOT NULL,
  `items_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_no`, `order_date`, `items_id`) VALUES
(1025, '0000-00-00', 1),
(1027, '0000-00-00', 2);

-- --------------------------------------------------------

--
-- Table structure for table `stores`
--

CREATE TABLE `stores` (
  `StoreID` int(11) NOT NULL,
  `Store_name` char(20) NOT NULL,
  `Location_city` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `stores`
--

INSERT INTO `stores` (`StoreID`, `Store_name`, `Location_city`) VALUES
(101, 'store_one', 'surat'),
(102, 'store_two', 'Mumbai');

-- --------------------------------------------------------

--
-- Table structure for table `warehouses`
--

CREATE TABLE `warehouses` (
  `WarehouseID` int(11) NOT NULL,
  `WarehouseName` char(30) NOT NULL,
  `Location` char(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `warehouses`
--

INSERT INTO `warehouses` (`WarehouseID`, `WarehouseName`, `Location`) VALUES
(1, 'SuratInternal', 'Surat,Gujarat'),
(2, 'MumbaiCentral', 'Mumbai,Maharastra');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_no`),
  ADD KEY `item_no` (`item_no`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_no`),
  ADD KEY `item_order_index` (`items_id`),
  ADD KEY `order_no` (`order_no`);

--
-- Indexes for table `stores`
--
ALTER TABLE `stores`
  ADD PRIMARY KEY (`StoreID`),
  ADD KEY `StoreID` (`StoreID`);

--
-- Indexes for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD PRIMARY KEY (`WarehouseID`),
  ADD KEY `WarehouseID` (`WarehouseID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `items_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`item_no`) REFERENCES `customer` (`customer_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`items_id`) REFERENCES `items` (`item_no`);

--
-- Constraints for table `warehouses`
--
ALTER TABLE `warehouses`
  ADD CONSTRAINT `warehouses_ibfk_1` FOREIGN KEY (`WarehouseID`) REFERENCES `cities` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
