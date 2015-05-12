/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : haoxi

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2014-10-18 17:33:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `userId` int(11) NOT NULL,
  `userName` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `power` int(11) NOT NULL DEFAULT '0',
  `lastExportTime` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`,`userName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'jiabing', '123', '0', null);
INSERT INTO `admin` VALUES ('2', 'james', 'ljb121020', '1', null);

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `publicId` varchar(255) NOT NULL,
  `userName` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL,
  `id` bigint(255) NOT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `adminId` varchar(255) DEFAULT NULL,
  `ifActived` int(1) NOT NULL DEFAULT '0',
  `createTime` varchar(255) NOT NULL,
  `activeTime` varchar(255) DEFAULT NULL,
  `placeCode` varchar(255) NOT NULL,
  `activeTimeMark` bigint(255) DEFAULT NULL,
  PRIMARY KEY (`publicId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('hxsd0000001', 'james', 'ljb121020', '21', 'male', '2', '1', '2014-10-18-17-10-35', '2014-10-18-17-11-17', 'sd', '202145');
INSERT INTO `user` VALUES ('hxsd0000002', '', '5zupr7m', '22', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxsd0000003', '', 'pj58t80', '23', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxsd0000004', '', 'yptmige', '24', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxsd0000005', '', 'pgxkmt0', '25', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxsd0000006', '', '1jrsr0o', '26', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxsd0000007', '', '1iqcjsx', '27', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxsd0000008', '', '6i1muuw', '28', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxsd0000009', '', 'i4qqplb', '29', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxsd0000010', '', 'mc0ca6l', '30', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxsd0000011', '', 'bt9axgf', '31', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxsd0000012', '', 'sfwe2x0', '32', null, '2', '0', '2014-10-18-17-10-35', null, 'sd', null);
INSERT INTO `user` VALUES ('hxtj0000001', '', '5mfqops', '33', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000002', '', 'zmbbkqj', '34', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000003', '', '38d4krd', '35', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000004', '', 'qe8ye2d', '36', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000005', '', '1qxoo65', '37', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000006', '', 'pxjiscc', '38', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000007', '', 'kuezwv5', '39', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000008', '', 'oj7jw1a', '40', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000009', '', 'ie4omhi', '41', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000010', '', 'rcu8x9m', '42', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000011', '', '2x3dobf', '43', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
INSERT INTO `user` VALUES ('hxtj0000012', '', 'h15h7zt', '44', null, '2', '0', '2014-10-18-17-10-41', null, 'tj', null);
