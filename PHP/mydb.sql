-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-11-30 16:41:25
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `mydb`
--

-- --------------------------------------------------------

--
-- 資料表結構 `images`
--

CREATE TABLE `images` (
  `id` int(4) UNSIGNED NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `title` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `images`
--

INSERT INTO `images` (`id`, `name`, `title`, `created_at`) VALUES
(1, '1.png', '妙蛙種子', '2023-11-30 16:06:19'),
(2, '4.png', '小火龍', '2023-11-30 16:07:41'),
(3, '7.png', '傑尼龜', '2023-11-30 16:21:05'),
(4, '25.png', '皮卡丘', '2023-11-30 16:21:44');

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `id` int(5) UNSIGNED NOT NULL,
  `category_id` int(3) UNSIGNED NOT NULL DEFAULT 0,
  `name` varchar(50) NOT NULL,
  `price` int(6) UNSIGNED NOT NULL,
  `img` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`id`, `category_id`, `name`, `price`, `img`) VALUES
(1, 2, 'Spider-Man', 500, 'spiderman.jpg'),
(2, 1, 'Superman', 1000, 'superman.png'),
(3, 1, 'Wonder Woman', 3000, 'wonderwoman.webp'),
(4, 2, 'Iron Man', 10000, 'ironman.png'),
(5, 1, 'Batman', 10000, 'batman.webp'),
(6, 2, 'Black Widow', 1100, 'blackwidow.jpg'),
(7, 1, 'Flash', 800, 'flash.jpg'),
(8, 2, 'Captain America', 900, 'captain-america.png'),
(9, 1, 'Shazam', 400, 'shazam.jpg'),
(10, 2, 'Thor', 3000, 'thor.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `product_category`
--

CREATE TABLE `product_category` (
  `id` int(3) UNSIGNED NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product_category`
--

INSERT INTO `product_category` (`id`, `name`) VALUES
(1, 'DC 漫畫'),
(2, '漫威');

-- --------------------------------------------------------

--
-- 資料表結構 `users`
--

CREATE TABLE `users` (
  `id` int(4) UNSIGNED NOT NULL,
  `name` varchar(15) DEFAULT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `valid` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `email`, `password`, `created_at`, `update_time`, `valid`) VALUES
(1, 'Andy', '0948930472', 'andy@test.com', '', '2023-11-23 10:39:56', '2023-11-24 14:18:22', 1),
(2, 'Johnny', '0911111222', 'johnny@test.com', '', '2023-11-23 10:47:12', NULL, 1),
(3, 'May', '0944555777', 'may@test.com', '', '2023-11-23 10:52:41', '2023-11-24 14:10:54', 1),
(4, 'Kenny', '0900000000', 'kenny@example.com', '', '2023-11-23 11:19:38', NULL, 1),
(5, 'Sue', '0900000000', 'sue@example.com', '', '2023-11-23 11:19:38', NULL, 1),
(6, 'Lucy', '0900000000', 'lucy@example.com', '', '2023-11-23 11:19:38', NULL, 1),
(7, 'Tom', '0988777665', 'tom@test.com', '', '2023-11-23 12:00:26', NULL, 1),
(8, 'Jack', '0978493283', 'jack@test.com', '', '2023-11-24 09:17:14', NULL, 1),
(9, 'George', NULL, 'george@test.com', '123456', '2023-11-24 15:13:41', NULL, 1),
(10, 'Duncan', NULL, 'duncan@test.com', '785634', '2023-11-24 15:14:29', NULL, 1),
(11, 'Jessica', NULL, 'jessica@test.com', 'ba00819f263287af1ff0100c5a323355', '2023-11-24 15:19:09', NULL, 1),
(12, 'Antonio', NULL, 'antonio@test.com', '13e92cac99ce72738e8d2e26aeeaf302', '2023-11-24 15:20:42', NULL, 1),
(13, 'Hans', NULL, 'hans@test.com', '58fd5045c726dd4a90fe71112fa5130f', '2023-11-27 10:30:55', NULL, 1),
(14, 'Alice', NULL, 'alice@test.com', '3ca4297f082595c480871657e1a7091b', '2023-11-27 10:31:56', NULL, 1),
(15, 'Scarlet', NULL, 'scarlet@test.com', 'ed2b1f468c5f915f3f1cf75d7068baae', '2023-11-27 10:32:40', NULL, 1);

-- --------------------------------------------------------

--
-- 資料表結構 `user_like`
--

CREATE TABLE `user_like` (
  `id` int(6) NOT NULL,
  `product_id` int(4) NOT NULL,
  `user_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `user_like`
--

INSERT INTO `user_like` (`id`, `product_id`, `user_id`) VALUES
(1, 2, 1),
(2, 2, 5),
(3, 6, 1),
(4, 9, 12),
(5, 3, 7),
(6, 4, 10),
(7, 8, 3),
(8, 7, 4),
(9, 5, 11),
(10, 1, 13);

-- --------------------------------------------------------

--
-- 資料表結構 `user_order`
--

CREATE TABLE `user_order` (
  `id` int(6) NOT NULL,
  `product_id` int(4) NOT NULL,
  `amount` int(3) NOT NULL,
  `user_id` int(6) NOT NULL,
  `order_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `user_order`
--

INSERT INTO `user_order` (`id`, `product_id`, `amount`, `user_id`, `order_date`) VALUES
(1, 1, 1, 3, '2023-11-01'),
(2, 3, 4, 2, '2023-11-15'),
(3, 5, 2, 6, '2023-11-14'),
(4, 2, 2, 7, '2023-11-01'),
(5, 4, 6, 9, '2023-11-25'),
(6, 9, 2, 3, '2023-11-19'),
(7, 7, 4, 11, '2023-11-13'),
(8, 1, 5, 6, '2023-11-26'),
(9, 8, 3, 8, '2023-11-07'),
(10, 6, 3, 1, '2023-11-09');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user_like`
--
ALTER TABLE `user_like`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `user_order`
--
ALTER TABLE `user_order`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `images`
--
ALTER TABLE `images`
  MODIFY `id` int(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product`
--
ALTER TABLE `product`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_category`
--
ALTER TABLE `product_category`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `users`
--
ALTER TABLE `users`
  MODIFY `id` int(4) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_like`
--
ALTER TABLE `user_like`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_order`
--
ALTER TABLE `user_order`
  MODIFY `id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
