---
title: Hello From the <del>Other Side</del> Terminal 
date: "2021-10-16T23:40:00"
template: "post"
draft: true
slug: "hello-from-the-terminal"
category: "Miscellaneous"
tags:
  - "Miscellaneous"
  - "Just for Fun"
  - "UNIX"
description: "My terminal greets me with ASCII arts (cat, rabbit, coffee) and customized messages dynamically based on the hour of the day. You can set it up in 5 mins too."
socialImage: "/media/terminal-login.png"
---

<br>

![terminal](/media/terminal-login.png)

Many many and many days ago, I was bored and decided to throw some ASCII art into the start up script. The result is every time I start a new shell session, I get to see different ASCII art and messages echo-ed on the standard output, based on different hours of the day. 

This is one of those things you don't need in life but interesting to look at. I was recently asked again by a friend how I set it up, so I decided to write a quick tutorial. 


## First, how does it work?
Every time a new shell session is being established, a series of startup scripts are invoked. We will be editing one of the scripts so that when involved, it conditionally echos some texts based on the system time. 


## Ok, how do I set it up?

First, find out what your default shell is to identify the location of the startup script. The easiest way is to look at the window header. At the time of writing, `zsh` should be prevelant among MacOS users as it has been the [default since Catalina](https://support.apple.com/en-us/HT208050). 

If you are on `zsh`, you can edit `.zlogin` (location: `~/.zlogin`), or other startup files like `.zshenv`. See [this post](https://unix.stackexchange.com/a/71258) for differences. 

For `bash`, you would want to edit `.bash_profile`. 

Next, open the file with a text editor of your choice and start editing. Here's the script I use that you can get started with: 

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

Editing startup files to echo strings was a simple trick to throw in some fun when you start up the terminal. For more comprehensive configurations (i.e. plugins and themes), check out [Oh My Zsh](https://ohmyz.sh/) if you haven't already! 



