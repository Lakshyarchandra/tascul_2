-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 01, 2024 at 07:17 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tascul`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `admin_id` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admins`
--

INSERT INTO `admins` (`id`, `admin_id`, `password`) VALUES
(1, 'TasculAdmin1', 'moksha');

-- --------------------------------------------------------

--
-- Table structure for table `internships`
--

CREATE TABLE `internships` (
  `id` int(11) NOT NULL,
  `candidate_serial` varchar(50) NOT NULL,
  `role` varchar(255) NOT NULL,
  `duration` varchar(50) NOT NULL,
  `assessments` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `internships`
--

INSERT INTO `internships` (`id`, `candidate_serial`, `role`, `duration`, `assessments`) VALUES
(1, '1010', 'Web Development Intern', '2 months', '1. Redesign Login Page; 2. Develop a Game (Other than Tic Tac Toe); 3. Build a typing practice application with WPM indicator'),
(7, '2212', 'Web Intern', '2 months', '1. Design Youtube clone using HTML CSS and Javascript.; 2. Develop an AI chat bot using OpenAi.; 3. Build a full stack SaaS application.');

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `thumbnail` text NOT NULL,
  `description` text NOT NULL,
  `live_link` text NOT NULL,
  `github_link` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`id`, `title`, `thumbnail`, `description`, `live_link`, `github_link`, `created_at`) VALUES
(2, 'Redesign Tascul Home and About Section.', 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*y6C4nSvy2Woe0m7bWEn4BA.png', 'Make a responsive redesign of tascul.in official sites home and about section using any tech stack.(Prefereably React.)', 'https://github.com/Lakshyarchandra/tascul', 'https://github.com/Lakshyarchandra/tascul', '2024-12-01 13:18:30'),
(3, 'Make a game other than Tic Tac Toe', 'https://img.lovepik.com/free-png/20210926/lovepik-cartoon-game-console-png-image_401486010_wh1200.png', 'Develop a game with scoring system using any tech stack.', 'https://roadmap.sh/game-developer', 'https://roadmap.sh/game-developer', '2024-12-01 18:11:28');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `candidate_serial` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `review` text NOT NULL,
  `status` enum('pending','accepted','rejected') DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `candidate_serial`, `name`, `review`, `status`, `created_at`) VALUES
(3, '1010', 'Lakshya Raj Chandra', 'Tascul is doing great work.', 'accepted', '2024-12-01 16:21:23'),
(4, '1010', 'Lakshya Raj Chandra', 'I did internship from tascul and they are really good with the assesments and making you work on real world projects.', 'pending', '2024-12-01 16:22:32'),
(5, '2212', 'Garv', 'Great work by tascul,they provide quality service and amazing people to work with. ', 'accepted', '2024-12-01 16:28:23');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `candidate_serial` varchar(50) NOT NULL,
  `domain` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `candidate_serial`, `domain`, `email`, `password`) VALUES
(2, 'Lakshya Raj Chandra', '1010', 'B.tech', 'lakshyarchandra@gmail.com', '$2b$10$2mWsTXsd7sS4EPqZ1JKf9.5109M3LtDrzs4jKaiwSU6X.jiqb3gyS'),
(5, 'Garv', '2212', 'MBBS', 'garv2212@gmail.com', '$2b$10$QG5Ss9NS7rbabaFJDq/hleB763eVPYKZsKw3lv0Nwdw5I6YcvduiS');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `admin_id` (`admin_id`);

--
-- Indexes for table `internships`
--
ALTER TABLE `internships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `candidate_serial` (`candidate_serial`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `candidate_serial` (`candidate_serial`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `internships`
--
ALTER TABLE `internships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `internships`
--
ALTER TABLE `internships`
  ADD CONSTRAINT `internships_ibfk_1` FOREIGN KEY (`candidate_serial`) REFERENCES `users` (`candidate_serial`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
