(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{364:function(t,i,_){"use strict";_.r(i);var v=_(42),a=Object(v.a)({},(function(){var t=this,i=t.$createElement,_=t._self._c||i;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"rabbitmq消息中间件快速入门"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq消息中间件快速入门"}},[t._v("#")]),t._v(" RabbitMQ消息中间件快速入门")]),t._v(" "),_("h2",{attrs:{id:"_1-amqp协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-amqp协议"}},[t._v("#")]),t._v(" "),_("strong",[t._v("1.AMQP协议")])]),t._v(" "),_("p",[t._v("RabbitMQ是完全基于AMQP协议实现的，所以先了解一下AMQP协议。")]),t._v(" "),_("p",[t._v("AMQP，即Advanced Message Queuing Protocol，一个提供统一消息服务的应用层标准 "),_("strong",[t._v("高级消息队列协议")]),t._v("（二进制应用层协议），是应用层协议的一个开放标准,为面向消息的中间件设计，兼容 JMS。")]),t._v(" "),_("p",[t._v("基于此协议的客户端与消息中间件可传递消息，并不受客户端/中间件同产品，不同的开发语言等条件的限制。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://cdn.chlinlearn.cloud/img/image2020-5-21_15-59-14.png",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("先了解一下AMQP协议中间的几个重要概念")]),t._v("：")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("Server：接收客户端的连接，实现AMQP实体服务。")])]),t._v(" "),_("li",[_("p",[t._v("Connection：连接，应用程序与Server的网络连接，TCP连接。")])]),t._v(" "),_("li",[_("p",[t._v("Channel：信道，消息读写等操作在信道中进行。客户端可以建立多个信道，每个信道代表一个会话任务。")])]),t._v(" "),_("li",[_("p",[t._v("Message：消息，应用程序和服务器之间传送的数据，消息可以非常简单，也可以很复杂。有Properties和Body组成。Properties为外包装，可以对消息进行修饰，比如消息的优先级、延迟等高级特性；Body就是消息体内容。")])]),t._v(" "),_("li",[_("p",[t._v("Virtual Host：虚拟主机，用于逻辑隔离。一个虚拟主机里面可以有若干个Exchange和Queue，同一个虚拟主机里面不能有相同名称的Exchange或Queue。")])]),t._v(" "),_("li",[_("p",[t._v("Exchange：交换器，接收消息，按照路由规则将消息路由到一个或者多个队列。如果路由不到，或者返回给生产者，或者直接丢弃。RabbitMQ常用的交换器常用类型有direct、topic、fanout、headers四种。")])]),t._v(" "),_("li",[_("p",[t._v("Binding：绑定，交换器和消息队列之间的虚拟连接，绑定中可以包含一个或者多个RoutingKey。")])]),t._v(" "),_("li",[_("p",[t._v("RoutingKey：路由键，生产者将消息发送给交换器的时候，会发送一个RoutingKey，用来指定路由规则，这样交换器就知道把消息发送到哪个队列。路由键通常为一个“.”分割的字符串，例如“com.rabbitmq”。")])]),t._v(" "),_("li",[_("p",[t._v("Queue：消息队列，用来保存消息，供消费者消费")])])]),t._v(" "),_("h2",{attrs:{id:"_2-rabbitmq"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-rabbitmq"}},[t._v("#")]),t._v(" "),_("strong",[t._v("2.RabbitMQ")])]),t._v(" "),_("p",[_("strong",[_("img",{attrs:{src:"http://cdn.chlinlearn.cloud/img/image2020-5-21_15-55-42.png",alt:""}})])]),t._v(" "),_("p",[_("strong",[t._v("rabbitMq特点：")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("可靠性：")]),t._v(" RabbitMQ使用一些机制来保证消息的可靠性，如持久化、传输确认及发布确认等。")]),t._v(" "),_("li",[_("strong",[t._v("灵活的路由：")]),t._v(" 在消息进入队列之前，通过交换器来路由消息。对于典型的路由功能，RabbitMQ 己经提供了一些内置的交换器来实现。针对更复杂的路由功能，可以将多个交换器绑定在一起，也可以通过插件机制来实现自己的交换器。这个后面会在我们将 RabbitMQ 核心概念的时候详细介绍到。")]),t._v(" "),_("li",[_("strong",[t._v("扩展性：")]),t._v(" 多个RabbitMQ节点可以组成一个集群，也可以根据实际业务情况动态地扩展集群中节点。")]),t._v(" "),_("li",[_("strong",[t._v("高可用性：")]),t._v(" 队列可以在集群中的机器上设置镜像，使得在部分节点出现问题的情况下队列仍然可用。")]),t._v(" "),_("li",[_("strong",[t._v("支持多种协议：")]),t._v(" RabbitMQ 除了原生支持 AMQP 协议，还支持 STOMP、MQTT 等多种消息中间件协议。")]),t._v(" "),_("li",[_("strong",[t._v("多语言客户端：")]),t._v(" RabbitMQ几乎支持所有常用语言，比如 Java、Python、Ruby、PHP、C#、JavaScript等。")]),t._v(" "),_("li",[_("strong",[t._v("易用的管理界面：")]),t._v(" RabbitMQ提供了一个易用的用户界面，使得用户可以监控和管理消息、集群中的节点等。在安装 RabbitMQ 的时候会介绍到，安装好 RabbitMQ 就自带管理界面。")]),t._v(" "),_("li",[_("strong",[t._v("插件机制：")]),t._v(" RabbitMQ 提供了许多插件，以实现从多方面进行扩展，当然也可以编写自己的插件。感觉这个有点类似 Dubbo 的 SPI机制。")])]),t._v(" "),_("p",[_("strong",[t._v("rabbitMq模型结构：")])]),t._v(" "),_("p",[_("img",{attrs:{src:"http://cdn.chlinlearn.cloud/img/image2020-5-21_16-21-9.png",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("rabbitMq交换器类型：")])]),t._v(" "),_("p",[_("strong",[t._v("fanout 类型的Exchange路由规则非常简单，它会把所有发送到该Exchange的消息路由到所有与它绑定的Queue中，不需要做任何判断操作，所以 fanout 类型是所有的交换机类型里面速度最快的。fanout 类型常用来广播消息。")])]),t._v(" "),_("p",[_("strong",[t._v("direct 类型的Exchange路由规则也很简单，它会把消息路由到那些 Bindingkey 与 RoutingKey 完全匹配的 Queue 中。")])]),t._v(" "),_("p",[_("strong",[t._v("topic类型的交换器在匹配规则上进行了扩展，它与 direct 类型的交换器相似，也是将消息路由到 BindingKey 和 RoutingKey 相匹配的队列中，但这里的匹配规则有些不同，它约定：")])]),t._v(" "),_("p",[t._v("RoutingKey 为一个点号“．”分隔的字符串（被点号“．”分隔开的每一段独立的字符串称为一个单词），如 “com.rabbitmq.client”、“java.util.concurrent”、“com.hidden.client”;")]),t._v(" "),_("p",[t._v("BindingKey 和 RoutingKey 一样也是点号“．”分隔的字符串；")]),t._v(" "),_("p",[t._v("BindingKey 中可以存在两种特殊字符串“**”和“#”，用于做模糊匹配，其中“*”用于匹配一个单词，“#”用于匹配多个单词(可以是零个)。")]),t._v(" "),_("p",[_("strong",[t._v("headers （不推荐）类型的交换器不依赖于路由键的匹配规则来路由消息，而是根据发送的消息内容中的 headers 属性进行匹配。在绑定队列和交换器时制定一组键值对，当发送消息到交换器时，RabbitMQ会获取到该消息的 headers（也是一个键值对的形式)'对比其中的键值对是否完全匹配队列和交换器绑定时指定的键值对，如果完全匹配则消息会路由到该队列，否则不会路由到该队列。headers 类型的交换器性能会很差，而且也不实用，基本上不会看到它的存在")]),t._v("；")]),t._v(" "),_("p",[t._v("（全文完❤️）")])])}),[],!1,null,null,null);i.default=a.exports}}]);