install zsh
    sudo apt install zsh -y
check zsh installation
    which zsh
Change default shell to zsh
    chsh -s $(which zsh)
Restart session
select 0 to Exit and create a placeholder .zshrc file
    0)  Exit, creating the file ~/.zshrc containing just a comment.
     That will prevent this function being run again.

Download Oh-my-zsh
    sh -c "$(wget https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    ==OR==
    sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

Clone the Powerlevel10K repo from git
    git clone https://github.com/romkatv/powerlevel10k.git $ZSH_CUSTOM/themes/powerlevel10k

Clone auto-suggestions and syntax highlighting repos as well
    git clone https://github.com/zsh-users/zsh-autosuggestions.git $ZSH_CUSTOM/plugins/zsh-autosuggestions
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

Open .zshrc file in your favorite editor and add the following lines
    ZSH_THEME="powerlevel10k/powerlevel10k"
    POWERLEVEL9K_MODE="nerdfont-complete"

Uncomment the options to activate them as needed. I suggest the following options.
    CASE_SENSITIVE="true"       # Around line 21
    ENABLE_CORRECTION="true"    # Around line 45

Lastly add the plugins that we cloned earlier for autosuggestions and syntax-highlighting at around line 71
    plugins=(git zsh-autosuggestions zsh-syntax-highlighting sudo)

Save and exit.

Download Firamono font from my site and install it.
Configure Terminal app to use Fira mono font to harness the power of Oh-my-zsh

At this point you need to log out and log back in to ensure the changes made so far are persistent.

After logging back in launch terminal. The P10K configure will run for the first time. Follow the prompts. My suggestions are:
    For Prompt Style choose (3) Rainbow
    For Character Set choose (1) Unicode 
    Choose whether you want to show current time on the command prompt or not. I suggest (3) 12 hour format
    For prompt separators choose (1) Angled
    For prompt heads choose (1) Sharp
    For prompt tails choose (1) Flat
    For prompt height choose (1) One line
    For prompt spacing choose (1) Compact
    For Icons you can choose your preference. I like a lot of fonts and I chose (2) Many icons
    For Prompt flow choose (1) Concise. Again this is a personal choice. I chose Concise
    Choose to enable Transient Prompt to provide a clean work area
    Choose (2) to have Quiet Instant prompt mode
    Choose to save to .zshrc and apply the changes we just made.

And that's it. You now have a fantastic command prompt.
