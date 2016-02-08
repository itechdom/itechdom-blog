# resources
### http://docs.docker.com/mac/step_two/
### doc how to get started with docker
### https://docs.docker.com/mac/step_three/
### whalesay example
### https://docs.docker.com/engine/userguide/usingdocker/#run-a-simple-application
### docker docs
### https://hub.docker.com/
### hub docker
### https://github.com/wsargent/docker-cheat-sheet
### docker cheat sheets
# concepts
### Container
this message appears when you run 

```

docker run hello-world

```

Hello from Docker.This message shows that your installation appears to be working correctly.To generate this message, Docker took the following steps: 1. The Docker client contacted the Docker daemon. 2. The Docker daemon pulled the "hello-world" image from the Docker Hub. 3. The Docker daemon created a new container from that image which runs the    executable that produces the output you are currently reading. 4. The Docker daemon streamed that output to the Docker client, which sent it    to your terminal.
### ubuntu bash example
docker run -it ubuntu bash  -i, --interactive=false         Keep STDIN open even if not attached  -t, --tty=false                 Allocate a pseudo-TTY
### https://docs.docker.com/engine/userguide/dockerizing/
### Streaming input and outputs
You can pass commands to docker containers so they can run themdocker run -d ubuntu:14.04 /bin/sh -c "while true; do echo hello world; sleep 1; done"
### Daemon
A daemonized Hello worldNow a container that runs a command and then exits has some uses but it’s not overly helpful. Let’s create a container that runs as a daemon, like most of the applications we’re probably going to run with Docker.Again we can do this with the docker run command:$ docker run -d ubuntu:14.04 /bin/sh -c "while true; do echo hello world; sleep 1; done"
1e5535038e285177d5214659a068137486f96ee5c2e85a4ac52dc83f2ebe4147
Wait, what? Where’s our “hello world” output? Let’s look at what we’ve run here. It should look pretty familiar. We ran docker run but this time we specified a flag: -d. The -d flag tells Docker to run the container and put it in the background, to daemonize it.We also specified the same image: ubuntu:14.04.Finally, we specified a command to run:/bin/sh -c "while true; do echo hello world; sleep 1; done"
This is the (hello) world’s silliest daemon: a shell script that echoes hello worldforever.So why aren’t we seeing any hello world’s? Instead Docker has returned a really long string:1e5535038e285177d5214659a068137486f96ee5c2e85a4ac52dc83f2ebe4147
This really long string is called a container ID. It uniquely identifies a container so we can work with it.Note: The container ID is a bit long and unwieldy. A bit later, we’ll see a shorter ID and ways to name our containers to make working with them easier.We can use this container ID to see what’s happening with our hello worlddaemon.Firstly let’s make sure our container is running. We can do that with the docker pscommand. The docker ps command queries the Docker daemon for information about all the containers it knows about.$ docker ps
CONTAINER ID  IMAGE         COMMAND               CREATED        STATUS       PORTS NAMES
1e5535038e28  ubuntu:14.04  /bin/sh -c 'while tr  2 minutes ago  Up 1 minute        insane_babbage
Here we can see our daemonized container. The docker ps has returned some useful information about it, starting with a shorter variant of its container ID:1e5535038e28.We can also see the image we used to build it, ubuntu:14.04, the command it is running, its status and an automatically assigned name, insane_babbage.Note: Docker automatically generates names for any containers started. We’ll see how to specify your own names a bit later.Okay, so we now know it’s running. But is it doing what we asked it to do? To see this we’re going to look inside the container using the docker logs command. Let’s use the container name Docker assigned.$ docker logs insane_babbage
hello world
hello world
hello world
. . .
The docker logs command looks inside the container and returns its standard output: in this case the output of our command hello world.Awesome! Our daemon is working and we’ve just created our first Dockerized application!Now we’ve established we can create our own containers let’s tidy up after ourselves and stop our detached container. To do this we use the docker stop command.$ docker stop insane_babbage
insane_babbage
The docker stop command tells Docker to politely stop the running container. If it succeeds it will return the name of the container it has just stopped.Let’s check it worked with the docker ps command.$ docker ps
CONTAINER ID  IMAGE         COMMAND               CREATED        STATUS       PORTS NAMES
Excellent. Our container has been stopped.
### Docker-compose
### https://docs.docker.com/compose/
### Examples of dockerized apps
### https://docs.docker.com/engine/examples/mongodb/
### docker machine
Machine lets you create Docker hosts on your computer, on cloud providers, and inside your own data center. It automatically creates hosts, installs Docker on them, then configures the docker client to talk to them. A “machine” is the combination of a Docker host and a configured client.
