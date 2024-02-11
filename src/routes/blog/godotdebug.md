---
title: "The wanting to debug your games to EVIL DOOM Emacs user pipline." 
date: "2024-02-11"
wip: "false"
---

---
[y'know even I was forgetting reading music, my bad](https://youtu.be/u3w4FCTcfME?si=2zM6Wqnxnl8mmwx7)

### My blog posts were getting too long. 
At this rate my next blog post was going to be the spring update. Decided to make this as an exersize in actually finishing blog posts.

# Godot is very cool, if you didn't know.
I like it a lot. It's free, open-source, intuitive, and makes making games fun. I've been using on and off for about 5 years? Haven't really made [much](https://yoush.itch.io/), but that's a topic for a different entry.

[Check it out](https://godotengine.org/)

About a year ago, I started using the [Vim keybinding plugin](https://github.com/VSCodeVim/Vim) in VScode. I'm always interested in optimizing and trying new things, and vim users always looked like what non-programmers thought programming was done, with their keyboard only navigation. I wanted to look like a fictional hacker too.

It did take a while to get comfortable with them, but now I can't code without them. I'm not at any "code at the speed of thought" level yet but I do feel like... 1-2.5% more efficient. Maybe one day I'll be like... 5% more efficient!?

I now wanted to use Vim keybindings in everything!!!

Godot's text editor did not support Vim keybindings.

# Godot's text editor is kinda basic, and that's fine.
It's built in, which is nice, and has all the features *most users* would need. Most peole don't have strong oppinions on text editors (shocking, I know). Godot developers understand that there are people who use text editors simply, and people who treat their text editor as a personality trait and try to customize it to their hearts (unreachable) content. Instead of re-inventing the wheel, Godot provides a solid standard tool (their editor), and allows you to use your own if you'd prefer, through it's use of the **LSP**.

# What's the LSP?
The Language Server Protocol or LSP, acts as an "spotter" for a programming language. They provide useful features like autocomplete, error and warning checking, or being able to look up function definitions and documentation on hover. It turns your text editor into a IDE for that language. Godot has an LSP for gd-script that text editors can connect to and use it. This can be just about whatever editor you'd like (as long as someone has set up LSP support on it), and one of the two [offically supported text editors for Godot is VSCode](https://github.com/godotengine/godot-vscode-plugin)! How convenient! 

So I installed the extension, and got to work!

I used VSCode and Godot fine for about a year.

# I had no debugger
The debugger in the VSCode plugin never worked for me. It was always somthing I just lived with, relying on print statements was usually good enough? I was able to get by fine without it up until recently. I faced an issue where I really did need to see how values were moving and changing after initialization. There HAD to be a soultion to an issue as fundemental as this. Maybe I didn't set it up properly?

Looking at the instructions, it was simple, I just needed to set up a ``launch.json`` file in the following format:

```JSON
{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "GDScript Godot",
			"type": "godot",
			"request": "launch",
			"project": "${workspaceFolder}",
			"port": 6007,
			"address": "127.0.0.1",
			"launch_game_instance": true,
			"launch_scene": false
		}
	]
}
```

I did that, and got an error trying to run the debugger

Looking around at other issues on the github:

It's because my Godot binary wasn't on my local user's path 

``"godot_tools.editor_path": "/usr/local/bin/godot"``

And then I needed to change the debug server port 

``"debugServer": 6006,``

And then I needed to add a protocol to the local address

``"address": "tcp://127.0.0.1",``

And after all that, the dubugger ran!

...it just ignored my breakpoints and wasn't showing any of the scene values in the window.

I replied to issues on the github, I asked for help on discord servers. No responses. 

I tried cloning the Godot-tools repo and fixing the issue myself. That's the value of open source projects right? Considering my level of experince of jumping into existing codebases is almost none, I wasn't really able to make sense of what was happening (the dog was not in me). 

So the default editor gives me breakpoints but no Vim, and VSCode gives me Vim and no breakpoints? Is there any solution that gives me everything I need?

Well I did say that there were *two* officially supported Text editors for the LSP.

# Emacs: a text editor for freaks.
In the same way Linux is an operating system for freaks. 

Although neither of them *have* to be. One of the biggest misconceptions about Linux is that you need to be a freak to use it. You don't! Using linux is like making coffee, it's as much work as you'd like it to be. Popular linux distributions come with everything you need out of the box and are a experince very similar to Windows or MacOs, while power users can chose to use a

*check's notes*

> "zen-kernel suckless coreutil gentoo system with a dwm and a custom display manager"

and some people put instant coffee in a mug while other people innact rituals rivaling anchient religious ceremonies to make their coffee instead. 

The point is that it gives you the flexability to change things *if you'd like to*, If you like the defaults, great! If you don't, you can change it.

Emacs is sorta like the linux of text editors in that sense.

It's free, open-source, and very modifiable (although software nerds prefer the term "hackable" because hack sounds cooler then modify).

It has it's own programming lanugae, Emacs lisp which lets you build functionality to do just about anything text-based in it, like write code, manage files, manage notes and documentation, use email and irc, among other things.

It's actually convenient that Emacs was also officially supported by Godot, as I had already been giving it a try a few weeks prior. What drew me to Emacs was [org-mode](https://orgmode.org/), which looked like a way to consolidate all the seperate orginization software I had been using (Notion, Anytype, Google Calendar, Obsidian) into one set of files.

Org mode has been amazing, and I'll likey discuss it in detail in a later post.

Emacs (similar to linux) has different "flavors" (preconfigured versions of it) to make getting into it more accessible. I had picked [SpacEmacs](https://www.spacemacs.org/) first, as it was the one that was used in the first tutorial I found. Recently moved to [DOOM Emacs](https://github.com/doomemacs/doomemacs), as it has Godot support by default and I was running into package issues with Spacemacs. Both are great choices, and they both use EVIL mode, which lets you use Vim keybindings in Emacs. It's been a lot to learn, but learning new things is fun and I'm very excited to see what I can do, not only in Godot, but with more of my computing tasks fit for Emacs.

fun fact: this post was written in Emacs 😳

# Emacs gdscript mode: "Life like this sure is sweet huh?"
Emacs Godot support is really cool. It kinda lets you make your entire project through Emacs, popping into the Godot GUI when nessicary. It's built around using existing tools like elgot, tree-sitter, and hydra, but that decoupling makes it simpler while also relying on more mature tooling. It also allows you to use a linter and other cool stuff (I just started using it but there's a lot)

Also as much as the VScode Vim emulation was good and I used it for a long time, being in a text editor designed around it and not having it pasted on top helps a LOT with issues like conflicting keybindings or things like the yank and paste commands not copying to your clipboard.

Is Emacs better then VSCode? No. The best tool for you is the one that does what you need it to the way you like it to. I hope the moral of this story isn't to switch to Emacs. I think Emacs is cool and you should check it out but use what works best for you. I just needed a debugger and wanted to reflect on how I got here.

Anyway Emacs cool, Godot cool.

Will probably make a "cool things you can do in Emacs" post eventually, but if I waited untill I felt like I knew enough to make that post then it'd never come out lol

I can finally debug my games (and actually release somthing).

I promise 1 more blog post before the winter-spring update in march.

