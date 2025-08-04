// 引入express
const express = require('express');
const app = express();

// 定义订单数据
const orderData = {
    orderId: '123456',
    customerName: '张三',
    items: [
        { productId: '001', name: '产品A', quantity: 2, price: 100 },
        { productId: '002', name: '产品B', quantity: 1, price: 200 }
    ],
    totalAmount: 400,
    status: '已发货'
};

// 返回订单信息
app.get('/get-order', (req, res) => {
    res.json(orderData);
});

// 处理未找到的请求
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

// 监听端口
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});