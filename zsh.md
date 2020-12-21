## Introduction

I have been using [Linux](https://www.linux.org) for a better part of two decades now but I won't say that I am an expert in Linux. Till recently I didn't even know that I could change shells and what capabilities other shells have. I was more of a functional and casual user than anything else who knew how to get a few things done but didn't know the internals and the intricacies of the operating system. One of the intricacies is to change the default Linux shell from `bash` to `zsh.` [Zsh](https://www.zsh.org/) is indeed a powerful shell with a lot of extensions, customizations, and community support with themes to tailor the shell to ones preferences. That was another thing I didn't know that there are themes for shell. I always used to think that bash shell is what you have and you have to use it without complaints.

Well, I was wrong and there are a lot of things you can change about your terminal and in this blog post, I am going to show you how to do it. I know there are a lot of tutorials around the web that show you exactly this and some are good than others. But this is more for me than anybody else. Really. When I started working for [AWS](https://aws.amazon.com), I got an opportunity to meet very smart people who have extended the capabilities of software tools to the limit of what they can do and then some. That is one of the reasons why I wanted to learn more and more about the basics so that I can have a very solid foundation.

## Why Zsh?
By installing a different shell, you can actually decorate and customize your plain old command prompt to something fancy very easily and you have a lot of options. Of course, you can also customize and decorate your command prompt on `bash` shell, but for that you need to know a lot of configurations and parameters if not all. And you need to build the configuration file by hand as well.

As I mentioned earlier, there is a vibrant and strong community support and there are several themes available along with pre-made scripts that you can just run and choose options to configure and tailor. That's what I plan to show you in this post.

## Preparation

All the Linux installations come with a `bash` shell by default. Depending on the distribution you use, there might be other shells also installed but we need to ensure that Zsh is installed. I am using [Ubuntu](https://www.ubuntu.com) to show the commands. The steps remain the same on a [Red Hat](https://www.redhat.com) clone as well. Red Hat clones use `yum` to install and maintain software whereas [Debian](https://www.debian.org) and its clones use `apt`. 

* Ensure you have Zsh installed. Run the following command.
    `sudo apt install zsh -y`

* Check if the Zsh installation is done properly and where it is installed by running the following command.
    `which zsh`
    It should show an output something like `/usr/bin/zsh`

* Now that Zsh is installed, change your default shell to zsh by running the following command.
    `chsh -s $(which zsh)`

Once the command runs successfully, you will need to restart your session in order for the terminal to start in the new shell environment. Once the terminal starts, the Zsh configuration scripts starts automatically to enable the user to configure settings and preferences. We are not going to do any configurations at this time and will leave this for later once all the compoents are installed and ready. On the prompt, select 0 to Exit and create a placeholder .zshrc file so that the script doesn't run again.
    `(0)  Exit, creating the file ~/.zshrc containing just a comment.`
     `That will prevent this function being run again.`

Now we are getting to the good part. First of all we need to install and download [Oh-my-zsh](https://ohmyz.sh/). Oh-My-Zsh is a delightful, open source, community-driven framework for managing your ZSH configuration. Download and run it using the either of the commands below. Generally all Linux installations come with `wget` preinstalled and you will have to install `curl`. Curl is a powerful tool for testing and debugging and if you don't have it, don't worry about it and don't bother downloading it. If you don't have it and don't know about it, you probably won't need it.

   `sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`
    ==OR==
   `sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"`

Next we need to make the terminal our own by installing and configuring themes. There are a [lot of themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) available for Zsh but my favorite is [PowerLevel10K](https://github.com/romkatv/powerlevel10k). To use it first clone the Powerlevel10K repo using [git](https://git-scm.com/). If you don't have git, install it by running `sudo apt install git -y` on your terminal.

   `git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k`

Once this is done, we will clone auto-suggestions and syntax highlighting repos which are plugins which extend the capabilities of Zsh a lot. Again there a [lot of plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) available for Oh-my-zsh but for now we will concentrate on these two.
   `git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions`
   `git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting`

Now that all the major components are downloaded and ready, it's time to personalize, configure and make the terminal prompt our own. Open `.zshrc` (It's located in your home folder) file in your favorite editor and add the following lines
   `ZSH_THEME="powerlevel10k/powerlevel10k"`
   `POWERLEVEL9K_MODE="nerdfont-complete"`

Uncomment the options to activate them as needed. I suggest the following options.
    `CASE_SENSITIVE="true"       # Around line 21`
    `ENABLE_CORRECTION="true"    # Around line 45`

Finally add the plugins that we cloned earlier for autosuggestions and syntax-highlighting at around line 71
    `plugins=(git zsh-autosuggestions zsh-syntax-highlighting sudo)`

Once done, save and exit. We are not done yet. We need to install a font that will allow us to use cool fonts and icons to spice up the prompt. The font that we need is Fira mono font. While the font itself is [free from Google](https://fonts.google.com/specimen/Fira+Mono#standard-styles), we need the patched version. The entire fonts library is available on [Github](https://github.com/ryanoasis/nerd-fonts). The fonts library is a huge one and you don't really need all of those. I recommend downloading Firamono medium font from my [site](Internal link here) and install it. To install it, you can either double-click on the font file and open it in File manager and click install or create a .fonts directory in your home folder and copy it there. I recommend the first option to install it system wide.

Once installed configure Terminal app preferences --> Profile --> Text to use Fira mono font to harness the power of Oh-my-zsh

At this point you need to log out and log back in to ensure the changes made so far are persistent.

After logging back in launch Terminal. The P10K configure will run for the first time. Follow the prompts. My suggestions are:
   * For Prompt Style choose (3) Rainbow
   * For Character Set choose (1) Unicode 
   * Choose whether you want to show current time on the command prompt or not. I suggest (3) 12 hour format
   * For prompt separators choose (1) Angled
   * For prompt heads choose (1) Sharp
   * For prompt tails choose (1) Flat
   * For prompt height choose (1) One line
   * For prompt spacing choose (1) Compact
   * For Icons you can choose your preference. I like a lot of fonts and I recommend (2) Many icons
   * For Prompt flow choose (1) Concise. Again this is a personal choice. I recommend Concise
    * Choose (y) to select Transient Prompt to provide a clean work area
   * Choose (2) to have Quiet Instant prompt mode
    Choose to save to .zshrc and apply the changes we just made.

And that's it. You are done! You now have a fantastic command prompt.
