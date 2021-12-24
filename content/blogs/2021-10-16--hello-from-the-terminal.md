---
title: Hello From the <del>Other Side</del> Terminal 
date: "2021-10-16T23:40:00"
template: "post"
draft: false
slug: "hello-from-the-terminal"
category: "Blog"
tags:
  - "Miscellaneous"
  - "UNIX"
description: "Terminal greetings that nobody asked for (...ASCII art alert)"
---

<br>

<div style='width:500px'>
<img src='/media/terminal-login.png'>
<figcaption>Animals are friends</figcaption>
</div>
<br>

<br>

I spin up new terminal sessions countless times a day. 

So one day, I decided that it needed to look more lively. 

I ended up throwing some ASCII arts and messages generated conditionally based on the time of the day into the the startup profile of the shell. Now, if you are used to the UNIX systems, you already know it's a no brainer. 

But every now and then I get asked how this is set up, so here's how. 


## Steps

First, find out what shell you are using. This helps to locate the startup profile of the shell. You can do this by running `echo $SHELL` in your terminal. 

If you are on `zsh`, you can edit `.zlogin` (location: `~/.zlogin`), or other startup files like `.zshenv`. See [this post](https://unix.stackexchange.com/a/71258) for differences. 

If you are on `bash`, you can edit `.bash_profile`. 

Once the file is located, open the file with a text editor of your choice and start editing. Here's the script used for the screenshot above:

```shell

# get the current hour
h=`date +%H`

# if hour < 12
if [ $h -lt 12 ]; then
  echo "
  GOOD MEOW-NING ^.^

        ▄▀▄     ▄▀▄
       ▄█░░▀▀▀▀▀░░█▄
   ▄▄  █░░░░░░░░░░░█ ▄▄
  █▄▄█ █░░▀░░┬░░▀░░█ █▄▄█

  "

# else if hour < 18
elif [ $h -lt 18 ]; then
  echo "
  GOOD AFTERNOON ^.^

        ▄▀▄     ▄▀▄              ))  \___/_    Have some
       ▄█░░▀▀▀▀▀░░█▄            |~~| /~~~\ \   afternoon coffee
   ▄▄  █░░░░░░░░░░░█ ▄▄        C|__| \___/     maybe?
  █▄▄█ █░░▀░░┬░░▀░░█ █▄▄█

  "

else
  echo "

(~\       _
 \ \     / \
  \ \___/ /\\
   | , , |  ~
   ( =v= )
    ' ^ '   GOOD EVENING

  "
fi
```

For ASCII arts, you can use online generators or tools to create your own. 

Once done, source the file or open a new session to see the effect. 

## Final Word

Editing the startup profiles to echo content to stdout is an extremely simple/quick trick to throw in some fun (or just be a little extra some days :D) when you start up the terminal. 

Additionally, I also use [Oh My Zsh](https://ohmyz.sh/) for more stylings and plugins. If you're a terminal person, check them out!

<br>