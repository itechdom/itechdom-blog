# Model
### Images
### Build a container
### Run container
### Exec a command
### Link containers
### Link volumes
# concepts
### Container
this message appears when you run docker run hello-world



Hello from Docker.

This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:

 1\. The Docker client contacted the Docker daemon.

 2\. The Docker daemon pulled the "hello-world" image from the Docker Hub.

 3\. The Docker daemon created a new container from that image which runs the

    executable that produces the output you are currently reading.

 4\. The Docker daemon streamed that output to the Docker client, which sent it

    to your terminal.


### ubuntu bash example
docker run -it ubuntu bash

  -i, --interactive=false         Keep STDIN open even if not attached  


  -t, --tty=false                 Allocate a pseudo-TTY  

### https://docs.docker.com/engine/userguide/dockerizing/
### Streaming input and outputs
You can pass commands to docker containers so they can run them

docker run -d ubuntu:14.04 /bin/sh -c "while true; do echo hello world; sleep 1; done"  

### Daemon
## A daemonized Hello world

## 

Now a container that runs a command and then exits has some uses but it’s not overly helpful. Let’s create a container that runs as a daemon, like most of the applications we’re probably going to run with Docker.

Again we can do this with the `docker run` command:

    $ docker run -d ubuntu:14.04 /bin/sh -c "while true; do echo hello world; sleep 1; done"
    1e5535038e285177d5214659a068137486f96ee5c2e85a4ac52dc83f2ebe4147

Wait, what? Where’s our “hello world” output? Let’s look at what we’ve run here. It should look pretty familiar. We ran `docker run` but this time we specified a flag: `-d`. The `-d` flag tells Docker to run the container and put it in the background, to daemonize it.

We also specified the same image: `ubuntu:14.04`.

Finally, we specified a command to run:

    /bin/sh -c "while true; do echo hello world; sleep 1; done"

This is the (hello) world’s silliest daemon: a shell script that echoes `hello world`forever.

So why aren’t we seeing any `hello world`’s? Instead Docker has returned a really long string:

    1e5535038e285177d5214659a068137486f96ee5c2e85a4ac52dc83f2ebe4147

This really long string is called a _container ID_. It uniquely identifies a container so we can work with it.

> **Note:** The container ID is a bit long and unwieldy. A bit later, we’ll see a shorter ID and ways to name our containers to make working with them easier.

We can use this container ID to see what’s happening with our `hello world`daemon.

Firstly let’s make sure our container is running. We can do that with the `docker ps`command. The `docker ps` command queries the Docker daemon for information about all the containers it knows about.

    $ docker ps
    CONTAINER ID  IMAGE         COMMAND               CREATED        STATUS       PORTS NAMES
    1e5535038e28  ubuntu:14.04  /bin/sh -c 'while tr  2 minutes ago  Up 1 minute        insane_babbage

Here we can see our daemonized container. The `docker ps` has returned some useful information about it, starting with a shorter variant of its container ID:`1e5535038e28`.

We can also see the image we used to build it, `ubuntu:14.04`, the command it is running, its status and an automatically assigned name, `insane_babbage`.

> **Note:** Docker automatically generates names for any containers started. We’ll see how to specify your own names a bit later.

Okay, so we now know it’s running. But is it doing what we asked it to do? To see this we’re going to look inside the container using the `docker logs` command. Let’s use the container name Docker assigned.

    $ docker logs insane_babbage
    hello world
    hello world
    hello world
    . . .

The `docker logs` command looks inside the container and returns its standard output: in this case the output of our command `hello world`.

Awesome! Our daemon is working and we’ve just created our first Dockerized application!

Now we’ve established we can create our own containers let’s tidy up after ourselves and stop our detached container. To do this we use the `docker stop` command.

    $ docker stop insane_babbage
    insane_babbage

The `docker stop` command tells Docker to politely stop the running container. If it succeeds it will return the name of the container it has just stopped.

Let’s check it worked with the `docker ps` command.

    $ docker ps
    CONTAINER ID  IMAGE         COMMAND               CREATED        STATUS       PORTS NAMES

Excellent. Our container has been stopped.
### if we want the container to run forever
### Docker-compose
### https://docs.docker.com/compose/
### Examples of dockerized apps
### https://docs.docker.com/engine/examples/mongodb/
### How to Dockerize an app
### Examine a docker build for errors
### http://stackoverflow.com/questions/26220957/how-can-i-inspect-the-file-system-of-a-failed-docker-build
### Volumes and Data in docker contaienrs
### https://docs.docker.com/v1.8/userguide/dockervolumes/
### data volumes
### Containers designated as containers
### Adding a data volume

You can add a data volume to a container using the `-v` flag with the `docker create` and `docker run` command. You can use the `-v` multiple times to mount multiple data volumes. Let’s mount a single volume now in our web application container.

    $ docker run -d -P --name web -v /webapp training/webapp python app.py

This will create a new volume inside a container at `/webapp`.

> **Note:** You can also use the `VOLUME` instruction in a `Dockerfile` to add one or more new volumes to any container created from that image.

Docker volumes default to mount in read-write mode, but you can also set it to be mounted read-only.

    $ docker run -d -P --name web -v /opt/webapp:ro training/webapp python app.py

### Locating a volume

You can locate the volume on the host by utilizing the ‘docker inspect’ command.

    $ docker inspect web

The output will provide details on the container configurations including the volumes. The output should look something similar to the following:

    ...
    Mounts": [
        {
            "Name": "fac362...80535",
            "Source": "/var/lib/docker/volumes/fac362...80535/_data",
            "Destination": "/webapp",
            "Driver": "local",
            "Mode": "",
            "RW": true
        }
    ]
    ...

You will notice in the above ‘Source’ is specifying the location on the host and ‘Destination’ is specifying the volume location inside the container. `RW` shows if the volume is read/write.
### mounting host directory
### Mount a host directory as a data volume

In addition to creating a volume using the `-v` flag you can also mount a directory from your Docker daemon’s host into a container.

> **Note**: If you are using Docker Machine on Mac or Windows, your Docker daemon only has limited access to your OS X/Windows filesystem. Docker Machine tries to auto-share your `/Users` (OS X) or `C:\Users`(Windows) directory - and so you can mount files or directories using`docker run -v /Users/:/ ...` (OS X) or `docker run -v /c/Users/:/ **Note:** If the path `/opt/webapp` already exists inside the container’s image, its contents will be replaced by the contents of `/src/webapp` on the host to stay consistent with the expected behavior of `mount`
> 
> When using Boot2Docker on Windows through git bash, there might be an issue with the way the source directory name is parsed. You can fix it by using a double slash at the beginning of the source directory name as explained in [issue #12751](https://github.com/docker/docker/issues/12751)

This is very useful for testing, for example we can mount our source code inside the container and see our application at work as we change the source code. The directory on the host must be specified as an absolute path and if the directory doesn’t exist Docker will automatically create it for you.

> **Note:** This is not available from a `Dockerfile` due to the portability and sharing purpose of built images. The host directory is, by its nature, host-dependent, so a host directory specified in a `Dockerfile` probably wouldn’t work on all hosts.

Docker volumes default to mount in read-write mode, but you can also set it to be mounted read-only.

    $ docker run -d -P --name web -v /src/webapp:/opt/webapp:ro training/webapp python app.py

Here we’ve mounted the same `/src/webapp` directory but we’ve added the`ro` option to specify that the mount should be read-only.

### Mount a host file as a data volume

The `-v` flag can also be used to mount a single file - instead of _just_ directories - from the host machine.

    $ docker run --rm -it -v ~/.bash_history:/.bash_history ubuntu /bin/bash

This will drop you into a bash shell in a new container, you will have your bash history from the host and when you exit the container, the host will have the history of the commands typed while in the container.

> **Note:** Many tools used to edit files including `vi` and `sed --in-place`may result in an inode change. Since Docker v1.1.0, this will produce an error such as “_sed: cannot rename ./sedKdJ9Dy: Device or resource busy_”. In the case where you want to edit the mounted file, it is often easiest to instead mount the parent directory.
### $ docker run -d -P --name web -v 
/src/
webapp:
/opt/
webapp training/webapp python app.py
### dealing with apt-get in docker files
### https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/
### docker machine
**Machine** lets you create **Docker** hosts on your computer, on cloud providers, and inside your own data center. It automatically creates hosts, installs **Docker** on them, then configures the **docker** client to talk to them. A “**machine**” is the combination of a **Docker** host and a configured client.
# How to setup
### Wordpresss
### https://hub.docker.com/_/wordpress/
### Dockerize itechdom-blog
### Create a docker file in each project directory that
### Pull repo
### install all required images
### java
### gradle
### scala
### node
### run npm install after
### haskell
### PHP
### ruby
### swift
### c compiler if needed
### dockerize node
### https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
# Conventions
### LXC
### Linux Containers
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
### How to create a docker file
### https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images
### Linking containers together
### https://docs.docker.com/v1.8/userguide/dockerlinks/
