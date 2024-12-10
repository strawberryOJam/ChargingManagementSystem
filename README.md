# 基于Spring Boot的充电桩管理系统

## 1. 项目介绍

本项目是一个基于Spring Boot和Vue的充电桩管理系统，系统包含三种角色：管理员、用户和维修人员。

### 角色功能

- **管理员**：负责用户管理、充电桩管理、报修管理、类别管理、充电常识管理等。
- **维修人员**：负责维修管理。
- **用户**：负责登录注册及报修。

![架构](https://www.codeshop.fun/Typora-Images/202402172200868.jpg)

## 2. 项目技术栈

- **后端框架**：Spring Boot、MyBatis
- **前端技术**：HTML、Vue.js

## 3. 开发环境

- **Java版本**：JDK 1.8（推荐）
- **IDE**：IDEA 或 Eclipse 均可
- **数据库**：MySQL（支持5.7及8.x版本）
- **Tomcat版本**：无须配置
- **Maven版本**：无特别限制
- **硬件环境**：Windows系统

## 4. 功能介绍

### 4.1 登录模块

![登录](https://www.codeshop.fun/Typora-Images/202402172200410.jpg)

用户可以通过该模块进行注册、登录等操作，进入各自对应的角色界面。

### 4.2 管理员模块

管理员拥有以下管理功能：

- **用户管理**：对用户信息进行查看、编辑、删除等操作。
- **充电桩管理**：管理充电桩的基本信息，包括新增、修改、删除等操作。
- **报修管理**：查看并处理用户提交的充电桩报修请求。
- **类别管理**：管理充电桩的类别，如快充、慢充等。
- **充电常识管理**：为用户提供关于充电桩的基本使用常识和安全提示。

![管理员-用户管理](https://www.codeshop.fun/Typora-Images/202402172200176.jpg)  
*用户管理界面*

![管理员-充电常识管理](https://www.codeshop.fun/Typora-Images/202402172200210.jpg)  
*充电常识管理界面*

![管理员-充电桩报修管理](https://www.codeshop.fun/Typora-Images/202402172200254.jpg)  
*充电桩报修管理界面*

![管理员-充电桩管理](https://www.codeshop.fun/Typora-Images/202402172200230.jpg)  
*充电桩管理界面*

![管理员-电桩类别管理](https://www.codeshop.fun/Typora-Images/202402172200248.jpg)  
*充电桩类别管理界面*

### 4.3 用户模块

用户可以进行以下操作：

- **注册与登录**：创建新账号或使用已有账号登录。
- **充电桩查询**：查看附近的充电桩并进行预约。
- **报修功能**：当发现充电桩故障时，可以在线提交报修请求。

![用户功能](https://www.codeshop.fun/Typora-Images/202402172200922.jpg)  
*用户模块界面*

### 4.4 维修人员模块

维修人员可以查看报修的充电桩，并进行维修管理，及时处理故障，确保充电桩的正常运行。

![维修员功能](https://www.codeshop.fun/Typora-Images/202402172200761.jpg)  
*维修人员模块界面*

### 4.5 项目文档目录
[![pAHMxpV.md.png](https://s21.ax1x.com/2024/12/10/pAHMxpV.md.png)](https://imgse.com/i/pAHMxpV)

### 5 论文文档
该项目包含论文 中期报告 开题报告 外文翻译 开题ppt
[![pAHMjf0.md.png](https://s21.ax1x.com/2024/12/10/pAHMjf0.md.png)](https://imgse.com/i/pAHMjf0)

### 6联系与支持
包含项目启动搭建 数据库搭建 论文资料 依赖配置 运行环境搭建 运行项目 接入腾讯高德地图Api
wx QRcode:
[![pAHQccT.md.jpg](https://s21.ax1x.com/2024/12/10/pAHQccT.md.jpg)](https://imgse.com/i/pAHQccT)
