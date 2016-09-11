# Concepts
### Network Packets
Computer communication links that do not support packets, such as traditional [point-to-point telecommunication links](https://en.wikipedia.org/wiki/Point-to-point_link "Point-to-point link"), simply transmit data as a [bit stream](https://en.wikipedia.org/wiki/Bit_stream "Bit stream"). However, most information in computer networks is carried in _packets_. A network packet is a formatted unit of [data](https://en.wikipedia.org/wiki/Data "Data") (a list of bits or bytes, usually a few tens of bytes to a few kilobytes long) carried by a [packet-switched network](https://en.wikipedia.org/wiki/Packet-switched_network "Packet-switched network").

In packet networks, the data is formatted into packets that are sent through the network to their destination. Once the packets arrive they are reassembled into their original message. With packets, the [bandwidth](https://en.wikipedia.org/wiki/Bandwidth_(computing) "Bandwidth (computing)") of the transmission medium can be better shared among users than if the network were [circuit switched](https://en.wikipedia.org/wiki/Circuit_switching "Circuit switching"). When one user is not sending packets, the link can be filled with packets from others users, and so the cost can be shared, with relatively little interference, provided the link isn't overused.

Packets consist of two kinds of data: control information and user data (also known as [payload](https://en.wikipedia.org/wiki/Payload_(computing) "Payload (computing)")). The control information provides data the network needs to deliver the user data, for example: source and destination [network addresses](https://en.wikipedia.org/wiki/Network_address "Network address"), [error detection](https://en.wikipedia.org/wiki/Error_detection "Error detection") codes, and sequencing information. Typically, control information is found in packet [headers](https://en.wikipedia.org/wiki/Header_(computing) "Header (computing)") and [trailers](https://en.wikipedia.org/wiki/Trailer_(computing) "Trailer (computing)"), with payload data in between.

Often the route a packet needs to take through a network is not immediately available. In that case the packet is [queued](https://en.wikipedia.org/wiki/Message_queue "Message queue") and waits until a link is free.
### Transimitted in bits/bytes/kilo
### Re-Assembled at destination
### Network Topology
### Physical Links
The transmission media (often referred to in the literature as the _physical media_) used to link devices to form a computer network include [electrical cable](https://en.wikipedia.org/wiki/Cable "Cable") ([Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet"), [HomePNA](https://en.wikipedia.org/wiki/HomePNA "HomePNA"), [power line communication](https://en.wikipedia.org/wiki/Power_line_communication "Power line communication"), [G.hn](https://en.wikipedia.org/wiki/G.hn "G.hn")), [optical fiber](https://en.wikipedia.org/wiki/Optical_fiber "Optical fiber") ([fiber-optic communication](https://en.wikipedia.org/wiki/Fiber-optic_communication "Fiber-optic communication")), and [radio waves](https://en.wikipedia.org/wiki/Radio_waves "Radio waves") ([wireless networking](https://en.wikipedia.org/wiki/Wireless_networking "Wireless networking")). In the [OSI model](https://en.wikipedia.org/wiki/OSI_model "OSI model"), these are defined at layers 1 and 2 — the physical layer and the data link layer.

A widely adopted _family_ of transmission media used in local area network ([LAN](https://en.wikipedia.org/wiki/LAN "LAN")) technology is collectively known as [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet"). The media and protocol standards that enable communication between networked devices over Ethernet are defined by [IEEE 802.3](https://en.wikipedia.org/wiki/IEEE_802.3 "IEEE 802.3"). Ethernet transmits data over both copper and fiber cables. Wireless LAN standards (e.g. those defined by [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11 "IEEE 802.11")) use[radio waves](https://en.wikipedia.org/wiki/Radio_waves "Radio waves"), or others use [infrared](https://en.wikipedia.org/wiki/IrDA "IrDA") signals as a transmission medium. [Power line communication](https://en.wikipedia.org/wiki/Power_line_communication "Power line communication") uses a building's power cabling to transmit data.
### Nodes
### Network nodes[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=9 "Edit section: Network nodes")]

Main article: [Node (networking)](https://en.wikipedia.org/wiki/Node_(networking) "Node (networking)")

Apart from any physical transmission medium there may be, networks comprise additional basic [system](https://en.wikipedia.org/wiki/Systems_engineering "Systems engineering") building blocks, such as [network interface controller](https://en.wikipedia.org/wiki/Network_interface_controller "Network interface controller") (NICs), [repeaters](https://en.wikipedia.org/wiki/Repeater "Repeater"), [hubs](https://en.wikipedia.org/wiki/Ethernet_hub "Ethernet hub"), [bridges](https://en.wikipedia.org/wiki/Network_bridge "Network bridge"),[switches](https://en.wikipedia.org/wiki/Network_switch "Network switch"), [routers](https://en.wikipedia.org/wiki/Router_(computing) "Router (computing)"), [modems](https://en.wikipedia.org/wiki/Modem "Modem"), and [firewalls](https://en.wikipedia.org/wiki/Firewall_(computing) "Firewall (computing)").
### NIC Network Interface Controller
#### Network interfaces[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=10 "Edit section: Network interfaces")]



[![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/ForeRunnerLE_25_ATM_Network_Interface_%281%29.jpg/220px-ForeRunnerLE_25_ATM_Network_Interface_%281%29.jpg)](https://en.wikipedia.org/wiki/File:ForeRunnerLE_25_ATM_Network_Interface_(1).jpg)



[](https://en.wikipedia.org/wiki/File:ForeRunnerLE_25_ATM_Network_Interface_(1).jpg "Enlarge")

An [ATM](https://en.wikipedia.org/wiki/Asynchronous_Transfer_Mode "Asynchronous Transfer Mode") network interface in the form of an accessory card. A lot of network interfaces are built-in.





A [network interface controller](https://en.wikipedia.org/wiki/Network_interface_controller "Network interface controller") (NIC) is [computer hardware](https://en.wikipedia.org/wiki/Computer_hardware "Computer hardware") that provides a computer with the ability to access the transmission media, and has the ability to process low-level network information. For example, the NIC may have a connector for accepting a cable, or an aerial for wireless transmission and reception, and the associated circuitry.

The NIC responds to traffic addressed to a [network address](https://en.wikipedia.org/wiki/Network_address "Network address") for either the NIC or the computer as a whole.

In [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet") networks, each network interface controller has a unique [Media Access Control](https://en.wikipedia.org/wiki/MAC_address "MAC address") (MAC) address—usually stored in the controller's permanent memory. To avoid address conflicts between network devices, the [Institute of Electrical and Electronics Engineers](https://en.wikipedia.org/wiki/Institute_of_Electrical_and_Electronics_Engineers "Institute of Electrical and Electronics Engineers") (IEEE) maintains and administers MAC address uniqueness. The size of an Ethernet MAC address is six [octets](https://en.wikipedia.org/wiki/Octet_(computing) "Octet (computing)"). The three most significant octets are reserved to identify NIC manufacturers. These manufacturers, using only their assigned prefixes, uniquely assign the three least-significant octets of every Ethernet interface they produce.
### Allows you to access the data coming from the network
### It's what you hook your ethernet to
### Repeaters and Hubs
#### Repeaters and hubs[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=11 "Edit section: Repeaters and hubs")]

A [repeater](https://en.wikipedia.org/wiki/Repeater "Repeater") is an [electronic](https://en.wikipedia.org/wiki/Electronics "Electronics") device that receives a network [signal](https://en.wikipedia.org/wiki/Signal_(information_theory) "Signal (information theory)"), cleans it of unnecessary noise, and regenerates it. The signal is [retransmitted](https://en.wikipedia.org/wiki/Retransmission_(data_networks) "Retransmission (data networks)") at a higher power level, or to the other side of an obstruction, so that the signal can cover longer distances without degradation. In most twisted pair Ethernet configurations, repeaters are required for cable that runs longer than 100 meters. With fiber optics, repeaters can be tens or even hundreds of kilometers apart.

A repeater with multiple ports is known as a [hub](https://en.wikipedia.org/wiki/Network_hub "Network hub"). Repeaters work on the physical layer of the OSI model. Repeaters require a small amount of time to regenerate the signal. This can cause a[propagation delay](https://en.wikipedia.org/wiki/Propagation_delay "Propagation delay") that affects network performance. As a result, many network architectures limit the number of repeaters that can be used in a row, e.g., the Ethernet [5-4-3 rule](https://en.wikipedia.org/wiki/5-4-3_rule "5-4-3 rule").

Hubs have been mostly obsoleted by modern switches; but repeaters are used for long distance links, notably undersea cabling.
### Re-distribute the signal
### Bridges
#### Bridges[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=12 "Edit section: Bridges")]

A [network bridge](https://en.wikipedia.org/wiki/Network_bridge "Network bridge") connects and filters traffic between two [network segments](https://en.wikipedia.org/wiki/Network_segment "Network segment") at the [data link layer](https://en.wikipedia.org/wiki/Data_link_layer "Data link layer") (layer 2) of the [OSI model](https://en.wikipedia.org/wiki/OSI_model "OSI model") to form a single network. This breaks the network's collision domain but maintains a unified broadcast domain. Network segmentation breaks down a large, congested network into an aggregation of smaller, more efficient networks.

Bridges come in three basic types:

*   Local bridges: Directly connect LANs
*   Remote bridges: Can be used to create a wide area network (WAN) link between LANs. Remote bridges, where the connecting link is slower than the end networks, largely have been replaced with routers.
*   Wireless bridges: Can be used to join LANs or connect remote devices to LANs.
### Switches
#### Switches[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=13 "Edit section: Switches")]

A [network switch](https://en.wikipedia.org/wiki/Network_switch "Network switch") is a device that forwards and filters [OSI layer 2](https://en.wikipedia.org/wiki/OSI_layer_2 "OSI layer 2") [datagrams](https://en.wikipedia.org/wiki/Datagrams "Datagrams") between [ports](https://en.wikipedia.org/wiki/Computer_port_(hardware) "Computer port (hardware)") based on the MAC addresses in the packets.[[9]](https://en.wikipedia.org/wiki/Computer_network#cite_note-9) A switch is distinct from a hub in that it only forwards the frames to the physical ports involved in the communication rather than all ports connected. It can be thought of as a multi-port bridge.[[10]](https://en.wikipedia.org/wiki/Computer_network#cite_note-10) It learns to associate physical ports to MAC addresses by examining the source addresses of received frames. If an unknown destination is targeted, the switch broadcasts to all ports but the source. Switches normally have numerous ports, facilitating a star topology for devices, and cascading additional switches.

[Multi-layer switches](https://en.wikipedia.org/wiki/Network_switch#Layer-specific_functionality "Network switch") are capable of routing based on layer 3 addressing or additional logical levels. The term _switch_ is often used loosely to include devices such as routers and bridges, as well as devices that may distribute traffic based on load or based on application content (e.g., a Web [URL](https://en.wikipedia.org/wiki/Uniform_Resource_Locator "Uniform Resource Locator") identifier).
### Loose term
### Includes
### Routers
### Bridges
### Routers
#### Routers[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=14 "Edit section: Routers")]



[![](https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Adsl_connections.jpg/220px-Adsl_connections.jpg)](https://en.wikipedia.org/wiki/File:Adsl_connections.jpg)



[](https://en.wikipedia.org/wiki/File:Adsl_connections.jpg "Enlarge")

A typical home or small office router showing the [ADSL](https://en.wikipedia.org/wiki/ADSL "ADSL") telephone line and[Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet") network cable connections





A [router](https://en.wikipedia.org/wiki/Router_(computing) "Router (computing)") is an [internetworking](https://en.wikipedia.org/wiki/Internetworking "Internetworking") device that forwards [packets](https://en.wikipedia.org/wiki/Packet_(information_technology) "Packet (information technology)") between networks by processing the routing information included in the packet or datagram (Internet protocol information from layer 3). The routing information is often processed in conjunction with the routing table (or forwarding table). A router uses its routing table to determine where to forward packets. (A destination in a routing table can include a "null" interface, also known as the "black hole" interface because data can go into it, however, no further processing is done for said data.)
### Modems
#### Modems[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=15 "Edit section: Modems")]

[Modems](https://en.wikipedia.org/wiki/Modem "Modem") (MOdulator-DEModulator) are used to connect network nodes via wire not originally designed for digital network traffic, or for wireless. To do this one or more [carrier signals](https://en.wikipedia.org/wiki/Carrier_signal "Carrier signal") are [modulated](https://en.wikipedia.org/wiki/Modulation "Modulation") by the digital signal to produce an [analog signal](https://en.wikipedia.org/wiki/Analog_signal "Analog signal") that can be tailored to give the required properties for transmission. Modems are commonly used for telephone lines, using a [Digital Subscriber Line](https://en.wikipedia.org/wiki/Digital_Subscriber_Line "Digital Subscriber Line") technology.
### Converts  digital to analog
### Firewalls
#### Firewalls[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=16 "Edit section: Firewalls")]

A [firewall](https://en.wikipedia.org/wiki/Firewall_(computing) "Firewall (computing)") is a network device for controlling network security and access rules. Firewalls are typically configured to reject access requests from unrecognized sources while allowing actions from recognized ones. The vital role firewalls play in network security grows in parallel with the constant increase in [cyber attacks](https://en.wikipedia.org/wiki/Cyber-Attacks "Cyber-Attacks").
### Gatways
### How the network is arranged
### OSI model
### Open Systems Interconnection model
### Every layer may have one or more protocol attached to it
### Layers
### 1
### Physical
### Layer 1: Physical Layer[[edit](https://en.wikipedia.org/w/index.php?title=OSI_model&action=edit&section=3 "Edit section: Layer 1: Physical Layer")]

The [physical layer](https://en.wikipedia.org/wiki/Physical_layer "Physical layer") has the following major functions:

*   It defines the [electrical](https://en.wikipedia.org/wiki/Electrical "Electrical") and physical specifications of the data connection. It defines the relationship between a device and a physical [transmission medium](https://en.wikipedia.org/wiki/Transmission_medium "Transmission medium") (e.g., a copper or [fiber optical cable](https://en.wikipedia.org/wiki/Optical_fiber_cable "Optical fiber cable")). This includes the layout of [pins](https://en.wikipedia.org/wiki/Lead_(electronics) "Lead (electronics)"), [voltages](https://en.wikipedia.org/wiki/Voltage "Voltage"), line [impedance](https://en.wikipedia.org/wiki/Characteristic_impedance "Characteristic impedance"), [cable](https://en.wikipedia.org/wiki/Cable "Cable") [specifications](https://en.wikipedia.org/wiki/Specification "Specification"), signal timing, [hubs](https://en.wikipedia.org/wiki/Network_hub "Network hub"), [repeaters](https://en.wikipedia.org/wiki/Repeater "Repeater"), [network adapters](https://en.wikipedia.org/wiki/Network_card "Network card"), [host bus adapters](https://en.wikipedia.org/wiki/Host_adapter "Host adapter") (HBA used in [storage area networks](https://en.wikipedia.org/wiki/Storage_area_network "Storage area network")) and more.
*   It defines the protocol to establish and terminate a connection between two directly connected nodes over a [communications](https://en.wikipedia.org/wiki/Communication "Communication") [medium](https://en.wikipedia.org/wiki/Transmission_medium "Transmission medium").
*   It may define the protocol for [flow control](https://en.wikipedia.org/wiki/Flow_control_(data) "Flow control (data)").
*   It defines transmission mode i.e. simplex, half duplex, full duplex.
*   It defines the [network topology](https://en.wikipedia.org/wiki/Network_topology "Network topology") as [bus](https://en.wikipedia.org/wiki/Bus_network "Bus network"), [mesh](https://en.wikipedia.org/wiki/Mesh_networking "Mesh networking"), or [ring](https://en.wikipedia.org/wiki/Ring_network "Ring network") being some of the most common.

The physical layer of [Parallel SCSI](https://en.wikipedia.org/wiki/Parallel_SCSI "Parallel SCSI") operates in this layer, as do the physical layers of [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet") and other local-area networks, such as [Token Ring](https://en.wikipedia.org/wiki/Token_Ring "Token Ring"), [FDDI](https://en.wikipedia.org/wiki/Fiber_Distributed_Data_Interface "Fiber Distributed Data Interface"), [ITU-T G.hn](https://en.wikipedia.org/wiki/G.hn "G.hn"), and [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11 "IEEE 802.11") (Wi-Fi), as well as personal area networks such as [Bluetooth](https://en.wikipedia.org/wiki/Bluetooth "Bluetooth") and [IEEE 802.15.4](https://en.wikipedia.org/wiki/IEEE_802.15.4 "IEEE 802.15.4").
### Electrical and physical specs
### 2
### Data Link Layer
### The [data link layer](https://en.wikipedia.org/wiki/Data_link_layer "Data link layer") provides [node-to-node data transfer](https://en.wikipedia.org/wiki/Node-to-node_data_transfer "Node-to-node data transfer") -- a [reliable](https://en.wikipedia.org/wiki/Reliability_(computer_networking) "Reliability (computer networking)") link between two directly connected nodes, by detecting and possibly correcting errors that may occur in the physical layer. The data link layer is divided into two sublayers:  

*   [Media Access Control](https://en.wikipedia.org/wiki/Media_Access_Control "Media Access Control") (MAC) layer - responsible for controlling how devices in a network gain access to data and permission to transmit it.
*   [Logical Link Control](https://en.wikipedia.org/wiki/Logical_Link_Control "Logical Link Control") (LLC) layer - controls error checking and packet synchronization.
### Node To Node data transfer
### Protocols
### PPP
The [Point-to-Point Protocol](https://en.wikipedia.org/wiki/Point-to-Point_Protocol "Point-to-Point Protocol") (PPP) is an example of a data link layer in the [TCP/IP](https://en.wikipedia.org/wiki/TCP/IP "TCP/IP") protocol stack.
### Other protocols
The [ITU-T](https://en.wikipedia.org/wiki/ITU-T "ITU-T") [G.hn](https://en.wikipedia.org/wiki/G.hn "G.hn") standard, which provides high-speed local area networking over existing wires (power lines, phone lines and coaxial cables), includes a complete [data link layer](https://en.wikipedia.org/wiki/Data_link_layer "Data link layer") that provides both[error correction](https://en.wikipedia.org/wiki/Error_correction "Error correction") and [flow control](https://en.wikipedia.org/wiki/Flow_control_(data) "Flow control (data)") by means of a [selective-repeat](https://en.wikipedia.org/wiki/Selective_repeat "Selective repeat") [sliding-window protocol](https://en.wikipedia.org/wiki/Sliding_window_protocol "Sliding window protocol").
### 3
### Network Layer
A network is a medium to which many nodes can be connected, on which every node has an _address_ and which permits nodes connected to it to transfer messages to other nodes connected to it by merely providing the content of a message and the address of the destination node and letting the network find the way to deliver ("route") the message to the destination node.
### No reliable datagram delivery
### transforms logical addresses to physical addresses
### Implements routing
### May or may not fragment data, assemble on delivery
### Protocols
A number of layer-management protocols, a function defined in the _management annex_, ISO 7498/4, belong to the network layer. These include routing protocols, multicast group management, network-layer information and error, and network-layer address assignment. It is the function of the payload that makes these belong to the network layer, not the protocol that carries them.[[5]](https://en.wikipedia.org/wiki/OSI_model#cite_note-5)
### 4
### Transport Layer
The [transport layer](https://en.wikipedia.org/wiki/Transport_layer "Transport layer") provides the functional and procedural means of transferring variable-length data sequences from a source to a destination host via one or more networks, while maintaining the quality of service functions.
### Visualize it
An easy way to visualize the transport layer is to compare it with a post office, which deals with the dispatch and classification of mail and parcels sent. Do remember, however, that a post office manages the outer envelope of mail. Higher layers may have the equivalent of double envelopes, such as cryptographic presentation services that can be read by the addressee only. Roughly speaking, [tunneling protocols](https://en.wikipedia.org/wiki/Tunneling_protocol "Tunneling protocol") operate at the transport layer, such as carrying non-IP protocols such as [IBM](https://en.wikipedia.org/wiki/IBM "IBM")'s [SNA](https://en.wikipedia.org/wiki/IBM_Systems_Network_Architecture "IBM Systems Network Architecture") or [Novell](https://en.wikipedia.org/wiki/Novell "Novell")'s [IPX](https://en.wikipedia.org/wiki/Internetwork_Packet_Exchange "Internetwork Packet Exchange") over an IP network, or end-to-end encryption with [IPsec](https://en.wikipedia.org/wiki/IPsec "IPsec"). While[Generic Routing Encapsulation](https://en.wikipedia.org/wiki/Generic_Routing_Encapsulation "Generic Routing Encapsulation") (GRE) might seem to be a network-layer protocol, if the encapsulation of the payload takes place only at endpoint, GRE becomes closer to a transport protocol that uses IP headers but contains complete frames or packets to deliver to an endpoint. [L2TP](https://en.wikipedia.org/wiki/Layer_2_Tunneling_Protocol "Layer 2 Tunneling Protocol") carries [PPP](https://en.wikipedia.org/wiki/Point-to-Point_Protocol "Point-to-Point Protocol") frames inside transport packet.
### TCP is an example
### Maybe provide segmentation desegmentation
The transport layer controls the reliability of a given link through flow control, segmentation/desegmentation, and error control. Some protocols are state- and connection-oriented. This means that the transport layer can keep track of the segments and retransmit those that fail. The transport layer also provides the acknowledgement of the successful data transmission and sends the next data if no errors occurred. The transport layer creates packets out of the message received from the application layer. Packetizing is a process of dividing the long message into smaller messages.
### Some protocols are connections oriented
### They resend on failed packages
### Classes of transport layer
OSI defines five classes of connection-mode transport protocols ranging from class 0 (which is also known as TP0 and provides the fewest features) to class 4 (TP4, designed for less reliable networks, similar to the Internet). Class 0 contains no error recovery, and was designed for use on network layers that provide error-free connections. Class 4 is closest to TCP, although TCP contains functions, such as the graceful close, which OSI assigns to the session layer. Also, all OSI TP connection-mode protocol classes provide expedited data and preservation of record boundaries. Detailed characteristics of TP0-4 classes are shown in the following table:[6]
### From 0-4
### 0 with the least features
### works on "error free" networks
### 5
### Session Layer
### Layer 5: Session Layer[[edit](https://en.wikipedia.org/w/index.php?title=OSI_model&action=edit&section=7 "Edit section: Layer 5: Session Layer")]

The [session layer](https://en.wikipedia.org/wiki/Session_layer "Session layer") controls the dialogues (connections) between computers. It establishes, manages and terminates the connections between the local and remote application. It provides for [full-duplex](https://en.wikipedia.org/wiki/Duplex_(telecommunications) "Duplex (telecommunications)"), [half-duplex](https://en.wikipedia.org/wiki/Half-duplex "Half-duplex"), or [simplex](https://en.wikipedia.org/wiki/Simplex_communication "Simplex communication") operation, and establishes checkpointing, adjournment, termination, and restart procedures. The OSI model made this layer responsible for graceful close of sessions, which is a property of the [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol "Transmission Control Protocol"), and also for session checkpointing and recovery, which is not usually used in the Internet Protocol Suite. The session layer is commonly implemented explicitly in application environments that use [remote procedure calls](https://en.wikipedia.org/wiki/Remote_procedure_call "Remote procedure call").
### 6
### Presentation Layer
The [presentation layer](https://en.wikipedia.org/wiki/Presentation_layer "Presentation layer") establishes context between application-layer entities, in which the application-layer entities may use different syntax and semantics if the presentation service provides a big mapping between them. If a mapping is available, presentation service data units are encapsulated into session protocol data units, and passed down the protocol stack.
### Present the data to the application
The original presentation structure used the [Basic Encoding Rules](https://en.wikipedia.org/wiki/Basic_Encoding_Rules "Basic Encoding Rules") of [Abstract Syntax Notation One](https://en.wikipedia.org/wiki/Abstract_Syntax_Notation_One "Abstract Syntax Notation One") (ASN.1), with capabilities such as converting an [EBCDIC](https://en.wikipedia.org/wiki/EBCDIC "EBCDIC")-coded text [file](https://en.wikipedia.org/wiki/Computer_file "Computer file") to an [ASCII](https://en.wikipedia.org/wiki/ASCII "ASCII")-coded file, or [serialization](https://en.wikipedia.org/wiki/Serialization "Serialization") of [objects](https://en.wikipedia.org/wiki/Object_(computer_science) "Object (computer science)") and other [data structures](https://en.wikipedia.org/wiki/Data_structure "Data structure") from and to [XML](https://en.wikipedia.org/wiki/XML "XML").
### Examples
### Encryption
### Converting files
### Independnece from data representation
This layer provides independence from data representation (e.g., [encryption](https://en.wikipedia.org/wiki/Encryption "Encryption")) by translating between application and network formats. The presentation layer transforms data into the form that the application accepts. This layer formats and encrypts data to be sent across a network. It is sometimes called the syntax layer.[[7]](https://en.wikipedia.org/wiki/OSI_model#cite_note-7)
### 7
### Application Layer
### Layer 7: Application Layer[[edit](https://en.wikipedia.org/w/index.php?title=OSI_model&action=edit&section=9 "Edit section: Layer 7: Application Layer")]

The [application layer](https://en.wikipedia.org/wiki/Application_layer "Application layer") is the OSI layer closest to the end user, which means both the OSI application layer and the user interact directly with the software application. This layer interacts with software applications that implement a communicating component. Such application programs fall outside the scope of the OSI model. Application-layer functions typically include identifying communication partners, determining resource availability, and synchronizing communication. When identifying communication partners, the application layer determines the identity and availability of communication partners for an application with data to transmit. When determining resource availability, the application layer must decide whether sufficient network or the requested communication exists. In synchronizing communication, all communication between applications requires cooperation that is managed by the application layer.
### Communication Protocols
A [communications protocol](https://en.wikipedia.org/wiki/Communications_protocol "Communications protocol") is a set of rules for exchanging information over network links. In a [protocol stack](https://en.wikipedia.org/wiki/Protocol_stack "Protocol stack") (also see the [OSI model](https://en.wikipedia.org/wiki/OSI_model "OSI model")), each protocol leverages the services of the protocol below it. An important example of a protocol stack is [HTTP](https://en.wikipedia.org/wiki/HTTP "HTTP") (the [World Wide Web protocol](https://en.wikipedia.org/wiki/WWW "WWW")) running over [TCP](https://en.wikipedia.org/wiki/Transmission_control_protocol "Transmission control protocol")over [IP](https://en.wikipedia.org/wiki/Internet_protocol "Internet protocol") (the [Internet protocols](https://en.wikipedia.org/wiki/Internet_Protocol_Suite "Internet Protocol Suite")) over [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11 "IEEE 802.11") (the Wi-Fi protocol). This stack is used between the [wireless router](https://en.wikipedia.org/wiki/Wireless_router "Wireless router") and the home user's personal computer when the user is surfing the web.
### TCP
### HTTP
### Runs over IP
### IP
### https://en.wikipedia.org/wiki/Internet_protocol_suite
### It's a layered archeticture
### Each protocol leverages the one underneath
### as in the OSI model
### Performance
## Network performance[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=36 "Edit section: Network performance")]

### Quality of service[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=37 "Edit section: Quality of service")]

Depending on the installation requirements, [network performance](https://en.wikipedia.org/wiki/Network_performance "Network performance") is usually measured by the [quality of service](https://en.wikipedia.org/wiki/Quality_of_service "Quality of service") of a telecommunications product. The parameters that affect this typically can include [throughput](https://en.wikipedia.org/wiki/Throughput "Throughput"), [jitter](https://en.wikipedia.org/wiki/Jitter "Jitter"), [bit error rate](https://en.wikipedia.org/wiki/Bit_error_rate "Bit error rate") and [latency](https://en.wikipedia.org/wiki/Latency_(engineering) "Latency (engineering)").

The following list gives examples of network performance measures for a circuit-switched network and one type of [packet-switched network](https://en.wikipedia.org/wiki/Packet-switched_network "Packet-switched network"), viz. ATM:

*   Circuit-switched networks: In [circuit switched](https://en.wikipedia.org/wiki/Circuit_switched "Circuit switched") networks, network performance is synonymous with the [grade of service](https://en.wikipedia.org/wiki/Grade_of_service "Grade of service"). The number of rejected calls is a measure of how well the network is performing under heavy traffic loads.[[26]](https://en.wikipedia.org/wiki/Computer_network#cite_note-26) Other types of performance measures can include the level of noise and echo.

*   ATM: In an [Asynchronous Transfer Mode](https://en.wikipedia.org/wiki/Asynchronous_Transfer_Mode "Asynchronous Transfer Mode") (ATM) network, performance can be measured by line rate, [quality of service](https://en.wikipedia.org/wiki/Quality_of_service "Quality of service") (QoS), data throughput, connect time, stability, technology, modulation technique and modem enhancements.[[27]](https://en.wikipedia.org/wiki/Computer_network#cite_note-27)

There are many ways to measure the performance of a network, as each network is different in nature and design. Performance can also be modelled instead of measured. For example, state transition diagrams are often used to model queuing performance in a circuit-switched network. The network planner uses these diagrams to analyze how the network performs in each state, ensuring that the network is optimally designed.[[28]](https://en.wikipedia.org/wiki/Computer_network#cite_note-28)

### Network congestion[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=38 "Edit section: Network congestion")]

[Network congestion](https://en.wikipedia.org/wiki/Network_congestion "Network congestion") occurs when a link or node is carrying so much data that its [quality of service](https://en.wikipedia.org/wiki/Quality_of_service "Quality of service") deteriorates. Typical effects include [queueing delay](https://en.wikipedia.org/wiki/Queueing_delay "Queueing delay"), [packet loss](https://en.wikipedia.org/wiki/Packet_loss "Packet loss") or the [blocking](https://en.wikipedia.org/wiki/Blocking_probability "Blocking probability") of new connections. A consequence of these latter two is that incremental increases in [offered load](https://en.wikipedia.org/wiki/Offered_load "Offered load") lead either only to small increase in network [throughput](https://en.wikipedia.org/wiki/Throughput "Throughput"), or to an actual reduction in network throughput.

[Network protocols](https://en.wikipedia.org/wiki/Network_protocol "Network protocol") that use aggressive [retransmissions](https://en.wikipedia.org/wiki/Retransmission_(data_networks) "Retransmission (data networks)") to compensate for packet loss tend to keep systems in a state of network congestion—even after the initial load is reduced to a level that would not normally induce network congestion. Thus, networks using these protocols can exhibit two stable states under the same level of load. The stable state with low throughput is known as_congestive collapse_.

Modern networks use [congestion control](https://en.wikipedia.org/wiki/Congestion_control "Congestion control") and [congestion avoidance](https://en.wikipedia.org/wiki/Congestion_avoidance "Congestion avoidance") techniques to try to avoid congestion collapse. These include: [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff "Exponential backoff") in protocols such as [802.11](https://en.wikipedia.org/wiki/802.11 "802.11")'s [CSMA/CA](https://en.wikipedia.org/wiki/Carrier_sense_multiple_access_with_collision_avoidance "Carrier sense multiple access with collision avoidance") and the original [Ethernet](https://en.wikipedia.org/wiki/Ethernet "Ethernet"), [window](https://en.wikipedia.org/wiki/Sliding_window "Sliding window") reduction in [TCP](https://en.wikipedia.org/wiki/Transmission_control_protocol "Transmission control protocol"), and [fair queueing](https://en.wikipedia.org/wiki/Fair_queueing "Fair queueing") in devices such as [routers](https://en.wikipedia.org/wiki/Router_(computing) "Router (computing)"). Another method to avoid the negative effects of network congestion is implementing priority schemes, so that some packets are transmitted with higher priority than others. Priority schemes do not solve network congestion by themselves, but they help to alleviate the effects of congestion for some services. An example of this is [802.1p](https://en.wikipedia.org/wiki/802.1p "802.1p"). A third method to avoid network congestion is the explicit allocation of network resources to specific flows. One example of this is the use of Contention-Free Transmission Opportunities (CFTXOPs) in the [ITU-T](https://en.wikipedia.org/wiki/ITU-T "ITU-T") [G.hn](https://en.wikipedia.org/wiki/G.hn "G.hn") standard, which provides high-speed (up to 1 Gbit/s) [Local area networking](https://en.wikipedia.org/wiki/Local_area_network "Local area network") over existing home wires (power lines, phone lines and coaxial cables).

For the Internet [RFC 2914](https://tools.ietf.org/html/rfc2914) addresses the subject of congestion control in detail.

### Network resilience[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=39 "Edit section: Network resilience")]

[Network resilience](https://en.wikipedia.org/wiki/Resilience_(network) "Resilience (network)") is "the ability to provide and maintain an acceptable level of [service](https://en.wikipedia.org/wiki/Service_(systems_architecture) "Service (systems architecture)") in the face of [faults](https://en.wikipedia.org/wiki/Fault_(technology) "Fault (technology)") and challenges to normal operation.”[[29]](https://en.wikipedia.org/wiki/Computer_network#cite_note-29)
### Security
## Security[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=40 "Edit section: Security")]

Main article: [Computer security](https://en.wikipedia.org/wiki/Computer_security "Computer security")

### Network security[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=41 "Edit section: Network security")]

[Network security](https://en.wikipedia.org/wiki/Network_security "Network security") consists of provisions and [policies](https://en.wikipedia.org/wiki/Policies "Policies") adopted by the [network administrator](https://en.wikipedia.org/wiki/Network_administrator "Network administrator") to prevent and monitor [unauthorized](https://en.wikipedia.org/wiki/Unauthorized "Unauthorized") access, misuse, modification, or denial of the computer network and its network-accessible resources.[[30]](https://en.wikipedia.org/wiki/Computer_network#cite_note-30) Network security is the authorization of access to data in a network, which is controlled by the network administrator. Users are assigned an ID and password that allows them access to information and programs within their authority. Network security is used on a variety of computer networks, both public and private, to secure daily transactions and communications among businesses, government agencies and individuals.

### Network surveillance[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=42 "Edit section: Network surveillance")]

[Network surveillance](https://en.wikipedia.org/wiki/Network_surveillance "Network surveillance") is the monitoring of data being transferred over computer networks such as the [Internet](https://en.wikipedia.org/wiki/Internet "Internet"). The monitoring is often done surreptitiously and may be done by or at the behest of governments, by corporations, criminal organizations, or individuals. It may or may not be legal and may or may not require authorization from a court or other independent agency.

Computer and network surveillance programs are widespread today, and almost all Internet traffic is or could potentially be monitored for clues to illegal activity.

Surveillance is very useful to governments and law enforcement to maintain [social control](https://en.wikipedia.org/wiki/Social_control "Social control"), recognize and monitor threats, and prevent/investigate [criminal](https://en.wikipedia.org/wiki/Criminal "Criminal") activity. With the advent of programs such as the [Total Information Awareness](https://en.wikipedia.org/wiki/Total_Information_Awareness "Total Information Awareness") program, technologies such as [high speed surveillance computers](https://en.wikipedia.org/wiki/NarusInsight "NarusInsight") and [biometrics](https://en.wikipedia.org/wiki/Surveillance#Biometric "Surveillance") software, and laws such as the [Communications Assistance For Law Enforcement Act](https://en.wikipedia.org/wiki/Communications_Assistance_For_Law_Enforcement_Act "Communications Assistance For Law Enforcement Act"), governments now possess an unprecedented ability to monitor the activities of citizens.[[31]](https://en.wikipedia.org/wiki/Computer_network#cite_note-us-surveillance-soc-31)

However, many [civil rights](https://en.wikipedia.org/wiki/Civil_rights "Civil rights") and [privacy](https://en.wikipedia.org/wiki/Privacy "Privacy") groups—such as [Reporters Without Borders](https://en.wikipedia.org/wiki/Reporters_Without_Borders "Reporters Without Borders"), the [Electronic Frontier Foundation](https://en.wikipedia.org/wiki/Electronic_Frontier_Foundation "Electronic Frontier Foundation"), and the [American Civil Liberties Union](https://en.wikipedia.org/wiki/American_Civil_Liberties_Union "American Civil Liberties Union")—have expressed concern that increasing surveillance of citizens may lead to a [mass surveillance](https://en.wikipedia.org/wiki/Mass_surveillance "Mass surveillance") society, with limited political and personal freedoms. Fears such as this have led to numerous lawsuits such as _[Hepting v. AT&T](https://en.wikipedia.org/wiki/Hepting_v._AT%26T "Hepting v. AT&T")_.[[31]](https://en.wikipedia.org/wiki/Computer_network#cite_note-us-surveillance-soc-31)[[32]](https://en.wikipedia.org/wiki/Computer_network#cite_note-bigger-monster-32) The [hacktivist](https://en.wikipedia.org/wiki/Hacktivist "Hacktivist") group [Anonymous](https://en.wikipedia.org/wiki/Anonymous_(group) "Anonymous (group)") has hacked into government websites in protest of what it considers "draconian surveillance".[[33]](https://en.wikipedia.org/wiki/Computer_network#cite_note-33)[[34]](https://en.wikipedia.org/wiki/Computer_network#cite_note-34)

### End to end encryption[[edit](https://en.wikipedia.org/w/index.php?title=Computer_network&action=edit&section=43 "Edit section: End to end encryption")]

[End-to-end encryption](https://en.wikipedia.org/wiki/End-to-end_encryption "End-to-end encryption") (E2EE) is a [digital communications](https://en.wikipedia.org/wiki/Digital_communications "Digital communications") paradigm of uninterrupted protection of data traveling between two communicating parties. It involves the originating party [encrypting](https://en.wikipedia.org/wiki/Encryption "Encryption") data so only the intended recipient can decrypt it, with no dependency on third parties. End-to-end encryption prevents intermediaries, such as [Internet providers](https://en.wikipedia.org/wiki/Internet_providers "Internet providers") or [application service providers](https://en.wikipedia.org/wiki/Application_service_provider "Application service provider"), from discovering or tampering with communications. End-to-end encryption generally protects both [confidentiality](https://en.wikipedia.org/wiki/Confidentiality "Confidentiality") and [integrity](https://en.wikipedia.org/wiki/Data_integrity "Data integrity").

Examples of end-to-end encryption include [PGP](https://en.wikipedia.org/wiki/Pretty_Good_Privacy "Pretty Good Privacy") for [email](https://en.wikipedia.org/wiki/Email "Email"), [OTR](https://en.wikipedia.org/wiki/Off-the-Record_Messaging "Off-the-Record Messaging") for [instant messaging](https://en.wikipedia.org/wiki/Instant_messaging "Instant messaging"), [ZRTP](https://en.wikipedia.org/wiki/ZRTP "ZRTP") for [telephony](https://en.wikipedia.org/wiki/Telephony "Telephony"), and [TETRA](https://en.wikipedia.org/wiki/Terrestrial_Trunked_Radio "Terrestrial Trunked Radio") for radio.

Typical [server](https://en.wikipedia.org/wiki/Server_(computing) "Server (computing)")-based communications systems do not include end-to-end encryption. These systems can only guarantee protection of communications between [clients](https://en.wikipedia.org/wiki/Client_(computing) "Client (computing)") and [servers](https://en.wikipedia.org/wiki/Server_(computing) "Server (computing)"), not between the communicating parties themselves. Examples of non-E2EE systems are [Google Talk](https://en.wikipedia.org/wiki/Google_Talk "Google Talk"), [Yahoo Messenger](https://en.wikipedia.org/wiki/Yahoo_Messenger "Yahoo Messenger"), [Facebook](https://en.wikipedia.org/wiki/Facebook "Facebook"), and [Dropbox](https://en.wikipedia.org/wiki/Dropbox_(service) "Dropbox (service)"). Some such systems, for example LavaBit and SecretInk, have even described themselves as offering "end-to-end" encryption when they do not. Some systems that normally offer end-to-end encryption have turned out to contain a [back door](https://en.wikipedia.org/wiki/Backdoor_(computing) "Backdoor (computing)") that subverts negotiation of the [encryption key](https://en.wikipedia.org/wiki/Encryption_key "Encryption key") between the communicating parties, for example [Skype](https://en.wikipedia.org/wiki/Skype "Skype").

The end-to-end encryption paradigm does not directly address risks at the communications endpoints themselves, such as the [technical exploitation](https://en.wikipedia.org/wiki/Exploit_(computer_security) "Exploit (computer security)") of [clients](https://en.wikipedia.org/wiki/Client_(computing) "Client (computing)"), poor quality [random number generators](https://en.wikipedia.org/wiki/Random_number_generator "Random number generator"), or [key escrow](https://en.wikipedia.org/wiki/Key_escrow "Key escrow"). E2EE also does not address [traffic analysis](https://en.wikipedia.org/wiki/Traffic_analysis "Traffic analysis"), which relates to things such as the identities of the end points and the times and quantities of messages that are sent.
# Scattered Info
# Disciplines
Computer networking may be considered a branch of [electrical engineering](https://en.wikipedia.org/wiki/Electrical_engineering "Electrical engineering"), [telecommunications](https://en.wikipedia.org/wiki/Telecommunications "Telecommunications"), [computer science](https://en.wikipedia.org/wiki/Computer_science "Computer science"), [information technology](https://en.wikipedia.org/wiki/Information_technology "Information technology") or [computer engineering](https://en.wikipedia.org/wiki/Computer_engineering "Computer engineering"), since it relies upon the theoretical and practical application of the related disciplines.
# Resources
### https://en.wikipedia.org/wiki/Computer_network
### https://www.connecteddotsnetworking.com/courses/mac-addresses-mac-headers-and-basic-switch-operation
### Computer networking fundamentals
### http://beej.us/guide/bgnet/output/html/multipage/index.html
### beej's guide to network programming
