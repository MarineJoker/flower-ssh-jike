# flower-ssh-jike
## 鲜花礼品网概要，简单的电子商务网站
* 系统实现的功能：用户注册、登录、信息修改、登出；管理员的登录和登出，添加和修改商品数据，挂失用户和解除挂失功能；商品分类别展示，分页展示；将商品添加到购物车，更新购物车商品数量，提交订单；拦截挂失用户，拦截未登录用户访问某些网页；
* 项目描述：本项目主要实现是电子商务网站的网上购物的基本功能。本项目的Struts框架中，JSP用于前端展现，Action 用于处理前端页面JSP发来的请求,请求参数通过ActionForm进行传递,Action 在获得请求后通过调用业务系统提供的Spring service bean做处理,最后将处理结果转发到相应的JSP进行展现。数据持久化层使用Hibernate对数据库进行操作。Spring负责业务逻辑层以及对Struts和Hibernate的集成和依赖注入。
