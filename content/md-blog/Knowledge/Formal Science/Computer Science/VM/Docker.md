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
this message appears when you run &lt;pre&gt;&lt;code&gt;docker run hello-world&lt;/code&gt;&lt;/pre&gt;<div><br></div><div><div>Hello from Docker.</div><div>This message shows that your installation appears to be working correctly.</div><div><br></div><div>To generate this message, Docker took the following steps:</div><div>&#xA0;1. The Docker client contacted the Docker daemon.</div><div>&#xA0;2. The Docker daemon pulled the &quot;hello-world&quot; image from the Docker Hub.</div><div>&#xA0;3. The Docker daemon created a new container from that image which runs the</div><div>&#xA0; &#xA0; executable that produces the output you are currently reading.</div><div>&#xA0;4. The Docker daemon streamed that output to the Docker client, which sent it</div><div>&#xA0; &#xA0; to your terminal.</div></div>
### ubuntu bash example
docker run -it ubuntu bash<div><br></div><div>&#xA0; -i, --interactive=false &#xA0; &#xA0; &#xA0; &#xA0; Keep STDIN open even if not attached<br></div><div><br></div><div>&#xA0; -t, --tty=false &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; Allocate a pseudo-TTY<br></div>
### https://docs.docker.com/engine/userguide/dockerizing/
### Streaming input and outputs
You can pass commands to docker containers so they can run them<div><br></div><div>docker run -d ubuntu:14.04 /bin/sh -c &quot;while true; do echo hello world; sleep 1; done&quot;<br></div>
### Daemon
<h2 id="a-daemonized-hello-world" style="margin-top: 0.2rem; margin-bottom: 0.5rem; font-family: &apos;Helvetica Neue&apos;, Helvetica, Roboto, Arial, sans-serif; font-weight: 400; line-height: 1.4; color: rgb(2, 150, 201); font-size: 2.3125rem; box-sizing: inherit; padding: 0px; letter-spacing: 1px;">A daemonized Hello world</h2><h2 id="a-daemonized-hello-world" style="box-sizing: inherit; margin-top: 0.2rem; margin-bottom: 0.5rem; padding: 0px; color: rgb(2, 150, 201); font-family: &apos;Helvetica Neue&apos;, Helvetica, Roboto, Arial, sans-serif; font-weight: 400; line-height: 1.4; font-size: 2.3125rem; letter-spacing: 1px;"><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Now a container that runs a command and then exits has some uses but it&#x2019;s not overly helpful. Let&#x2019;s create a container that runs as a daemon, like most of the applications we&#x2019;re probably going to run with Docker.</p><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Again we can do this with the&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">docker run

```

&#xA0;command:</p><pre style="padding: 0px; color: rgb(5, 14, 26); margin-bottom: 1.5rem; letter-spacing: normal; box-sizing: inherit; background-color: rgb(255, 255, 255);"><code class="hljs dns" style="padding: 0.5em; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border: 1px solid rgb(255, 203, 148); box-sizing: inherit; display: block; overflow-x: auto; background: rgb(248, 248, 248);">$ docker run -d ubuntu:14.04 /bin/sh -c &quot;while true<span class="hljs-comment" style="box-sizing: inherit; color: rgb(153, 153, 136); font-style: italic;">; do echo hello world; sleep 1; done&quot;</span>
<span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">1e5535038</span>e<span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">285177d52146</span><span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">59a068137486</span>f96ee<span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">5c2e85a4</span>ac52dc83f2ebe4147


```

</pre><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Wait, what? Where&#x2019;s our &#x201C;hello world&#x201D; output? Let&#x2019;s look at what we&#x2019;ve run here. It should look pretty familiar. We ran&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">docker run

```

&#xA0;but this time we specified a flag:&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">-d

```

. The&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">-d

```

&#xA0;flag tells Docker to run the container and put it in the background, to daemonize it.</p><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">We also specified the same image:&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">ubuntu:14.04

```

.</p><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Finally, we specified a command to run:</p><pre style="padding: 0px; color: rgb(5, 14, 26); margin-bottom: 1.5rem; letter-spacing: normal; box-sizing: inherit; background-color: rgb(255, 255, 255);"><code class="hljs vim" style="padding: 0.5em; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border: 1px solid rgb(255, 203, 148); box-sizing: inherit; display: block; overflow-x: auto; background: rgb(248, 248, 248);">/bin/<span class="hljs-keyword" style="box-sizing: inherit; font-weight: bold;">sh</span> -<span class="hljs-keyword" style="box-sizing: inherit; font-weight: bold;">c</span> <span class="hljs-string" style="box-sizing: inherit; color: rgb(221, 17, 68);">&quot;while true; do echo hello world; sleep 1; done&quot;</span>


```

</pre><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">This is the (hello) world&#x2019;s silliest daemon: a shell script that echoes&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">hello world

```

forever.</p><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">So why aren&#x2019;t we seeing any&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">hello world

```

&#x2019;s? Instead Docker has returned a really long string:</p><pre style="padding: 0px; color: rgb(5, 14, 26); margin-bottom: 1.5rem; letter-spacing: normal; box-sizing: inherit; background-color: rgb(255, 255, 255);"><code class="hljs dns" style="padding: 0.5em; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border: 1px solid rgb(255, 203, 148); box-sizing: inherit; display: block; overflow-x: auto; background: rgb(248, 248, 248);"><span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">1e5535038</span>e<span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">285177d52146</span><span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">59a068137486</span>f96ee<span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">5c2e85a4</span>ac52dc83f2ebe4147


```

</pre><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">This really long string is called a&#xA0;<em style="box-sizing: inherit; line-height: inherit;">container ID</em>. It uniquely identifies a container so we can work with it.</p><blockquote style="padding-top: 0.5625rem; padding-right: 1.25rem; padding-left: 1.1875rem; margin-bottom: 1.25rem; border-left-width: 0px; border-left-color: black; letter-spacing: normal; box-sizing: inherit; line-height: 1.6; font-size: 16px;"><p style="margin-bottom: 1.25rem; font-size: 1rem; line-height: 1.6; box-sizing: inherit; padding: 0px; font-family: inherit; text-rendering: optimizeLegibility; letter-spacing: 1px;"><strong style="box-sizing: inherit; line-height: inherit;">Note:</strong>&#xA0;The container ID is a bit long and unwieldy. A bit later, we&#x2019;ll see a shorter ID and ways to name our containers to make working with them easier.</p></blockquote><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">We can use this container ID to see what&#x2019;s happening with our&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">hello world

```

daemon.</p><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Firstly let&#x2019;s make sure our container is running. We can do that with the&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">docker ps

```

command. The&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">docker ps

```

&#xA0;command queries the Docker daemon for information about all the containers it knows about.</p><pre style="padding: 0px; color: rgb(5, 14, 26); margin-bottom: 1.5rem; letter-spacing: normal; box-sizing: inherit; background-color: rgb(255, 255, 255);"><code class="hljs swift" style="padding: 0.5em; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border: 1px solid rgb(255, 203, 148); box-sizing: inherit; display: block; overflow-x: auto; background: rgb(248, 248, 248);">$ docker ps
<span class="hljs-type" style="box-sizing: inherit; color: rgb(68, 85, 136); font-weight: bold;">CONTAINER</span> <span class="hljs-type" style="box-sizing: inherit; color: rgb(68, 85, 136); font-weight: bold;">ID</span>  <span class="hljs-type" style="box-sizing: inherit; color: rgb(68, 85, 136); font-weight: bold;">IMAGE</span>         <span class="hljs-type" style="box-sizing: inherit; color: rgb(68, 85, 136); font-weight: bold;">COMMAND</span>               <span class="hljs-type" style="box-sizing: inherit; color: rgb(68, 85, 136); font-weight: bold;">CREATED</span>        <span class="hljs-type" style="box-sizing: inherit; color: rgb(68, 85, 136); font-weight: bold;">STATUS</span>       <span class="hljs-type" style="box-sizing: inherit; color: rgb(68, 85, 136); font-weight: bold;">PORTS</span> <span class="hljs-type" style="box-sizing: inherit; color: rgb(68, 85, 136); font-weight: bold;">NAMES</span>
1e5535038e28  ubuntu:<span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">14.04</span>  /bin/sh -<span class="hljs-built_in" style="box-sizing: inherit; color: rgb(0, 134, 179);">c</span> &apos;<span class="hljs-keyword" style="box-sizing: inherit; font-weight: bold;">while</span> tr  <span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">2</span> minutes ago  <span class="hljs-type" style="box-sizing: inherit; color: rgb(68, 85, 136); font-weight: bold;">Up</span> <span class="hljs-number" style="box-sizing: inherit; color: rgb(0, 128, 128);">1</span> minute        insane_babbage


```

</pre><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Here we can see our daemonized container. The&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">docker ps

```

&#xA0;has returned some useful information about it, starting with a shorter variant of its container ID:<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">1e5535038e28

```

.</p><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">We can also see the image we used to build it,&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">ubuntu:14.04

```

, the command it is running, its status and an automatically assigned name,&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">insane_babbage

```

.</p><blockquote style="padding-top: 0.5625rem; padding-right: 1.25rem; padding-left: 1.1875rem; margin-bottom: 1.25rem; border-left-width: 0px; border-left-color: black; letter-spacing: normal; box-sizing: inherit; line-height: 1.6; font-size: 16px;"><p style="margin-bottom: 1.25rem; font-size: 1rem; line-height: 1.6; box-sizing: inherit; padding: 0px; font-family: inherit; text-rendering: optimizeLegibility; letter-spacing: 1px;"><strong style="box-sizing: inherit; line-height: inherit;">Note:</strong>&#xA0;Docker automatically generates names for any containers started. We&#x2019;ll see how to specify your own names a bit later.</p></blockquote><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Okay, so we now know it&#x2019;s running. But is it doing what we asked it to do? To see this we&#x2019;re going to look inside the container using the&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">docker logs

```

&#xA0;command. Let&#x2019;s use the container name Docker assigned.</p><pre style="padding: 0px; color: rgb(5, 14, 26); margin-bottom: 1.5rem; letter-spacing: normal; box-sizing: inherit; background-color: rgb(255, 255, 255);"><code class="hljs elixir" style="padding: 0.5em; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border: 1px solid rgb(255, 203, 148); box-sizing: inherit; display: block; overflow-x: auto; background: rgb(248, 248, 248);"><span class="hljs-variable" style="box-sizing: inherit; color: rgb(0, 128, 128);">$ </span>docker logs insane_babbage
hello world
hello world
hello world
. . .


```

</pre><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">The&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">docker logs

```

&#xA0;command looks inside the container and returns its standard output: in this case the output of our command&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">hello world

```

.</p><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Awesome! Our daemon is working and we&#x2019;ve just created our first Dockerized application!</p><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Now we&#x2019;ve established we can create our own containers let&#x2019;s tidy up after ourselves and stop our detached container. To do this we use the&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">docker stop

```

&#xA0;command.</p><pre style="padding: 0px; color: rgb(5, 14, 26); margin-bottom: 1.5rem; letter-spacing: normal; box-sizing: inherit; background-color: rgb(255, 255, 255);"><code class="hljs vbnet" style="padding: 0.5em; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border: 1px solid rgb(255, 203, 148); box-sizing: inherit; display: block; overflow-x: auto; background: rgb(248, 248, 248);">$ docker <span class="hljs-keyword" style="box-sizing: inherit; font-weight: bold;">stop</span> insane_babbage
insane_babbage


```

</pre><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">The&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">docker stop

```

&#xA0;command tells Docker to politely stop the running container. If it succeeds it will return the name of the container it has just stopped.</p><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Let&#x2019;s check it worked with the&#xA0;<code style="padding: 0.125rem 0.3125rem 0.0625rem; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border-color: rgb(255, 203, 148); box-sizing: inherit; background-color: rgb(248, 248, 248);">docker ps

```

&#xA0;command.</p><pre style="padding: 0px; color: rgb(5, 14, 26); margin-bottom: 1.5rem; letter-spacing: normal; box-sizing: inherit; background-color: rgb(255, 255, 255);"><code class="hljs vim" style="padding: 0.5em; font-family: Consolas, &apos;Liberation Mono&apos;, Courier, monospace; color: rgb(51, 51, 51); border: 1px solid rgb(255, 203, 148); box-sizing: inherit; display: block; overflow-x: auto; background: rgb(248, 248, 248);">$ docker <span class="hljs-keyword" style="box-sizing: inherit; font-weight: bold;">ps</span>
CONTAINER ID  IMAGE         COMMAND               CREATED        STATUS       PORTS NAMES


```

</pre><p style="margin-bottom: 1.25rem; box-sizing: inherit; padding: 0px; font-size: 16px; line-height: 1.6; text-rendering: optimizeLegibility; color: rgb(5, 14, 26);">Excellent. Our container has been stopped.</p></h2>
### Docker-compose
### https://docs.docker.com/compose/
### Examples of dockerized apps
### https://docs.docker.com/engine/examples/mongodb/
### docker machine
<b style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">Machine</b><span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">&#xA0;lets you create&#xA0;</span><b style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">Docker</b><span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">&#xA0;hosts on your computer, on cloud providers, and inside your own data center. It automatically creates hosts, installs&#xA0;</span><b style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">Docker</b><span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">&#xA0;on them, then configures the&#xA0;</span><b style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">docker</b><span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">&#xA0;client to talk to them. A &#x201C;</span><b style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">machine</b><span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">&#x201D; is the combination of a&#xA0;</span><b style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">Docker</b><span style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 16px; line-height: 19.2px;">&#xA0;host and a configured client.</span>
