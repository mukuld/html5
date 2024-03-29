# How to create a bootable USB drive on MacBook

## Introduction
I like to tinker around with technology. I think that much will be evident from my [website](https://www.dharwadkar.com "My site") and the type of posts that I write here. Sometime back, I was trying to play around with a [Raspberry Pi](https://www.raspberrypi.org "Raspberry Pi Site address"). It was a RPi zero so it didn't have a lot of capabilities, but I figured out that I could run Raspbian Buster or [Debian Buster](https://www.debian.org/releases/buster/ "Debian") on it and also ran this [website on it](https://www.dharwadkar.com/# "Coming Soon") till recently when I [migrated it to AWS](https://www.dharwadkar.com/# "Coming Soon").

## The problem
For quite some time now, I have been using a [MacBook](https://www.apple.com/mac "Apple Mac") as my primary computer and while it is a great machine for personal productivity and development, I didn't really dive deep on system administration. I needed to figure out how to format a USB drive and a SD card on Mac and write a bootable image on it.

I did a lot of research and I came across a site from a Microsoft engineer who had written a very nice article on this and I used that article to very easily achieve my task. But I can't find that anymore so instead of relying on someone else, I thought I will document it myself and also add some additional details so that others can benefit. I could have very easily used my [Windows](https://www.windows.com "Microsoft Windows") computer but that wouldn't be integral with my tinkerer nature.

Recently, I had revived an old 2009 laptop which refused to run any of newer OSes so I did another research on possible OSes that could run on it and figured that I could run [Lubuntu](https://www.lubuntu.net "Lubuntu") on it easily. So I went ahead and downloaded the latest version of Lubuntu - [Focal Fossa](https://cdimage.ubuntu.com/lubuntu/releases/20.04.1/release/) and set to the task of creating a bootable USB drive.

## The technical details

To achieve this, I would need only two tools from my MacBook
1. `diskutil`
2. `dd`

Let's take a look at the details now.

The first thing that needs to be done is to determine the device details of the USB drive. To do that, first insert the drive in your USB port and run the command below:

`diskutil list`

[image here]

This command will show an output of the disks mounted. Determine the device details by looking at the disk size and note down the device details which will be in the form `/dev/diskN` where N is a number. Once the device number is determined, run the following command under root (sudo) privileges

`sudo diskutil eraseDisk FAT32` *LABEL* `MBRFormat /dev/diskN`

[image here]

Make sure to replace the *LABEL* with the name you want and *N* with the number noted above.

It will take a few minutes to complete the process and once it is complete, run the following command:

`diskutil unmountDisk /dev/diskN`

Again taking care to replace N with the appropriate number.

Once the disk is unmounted, we are now ready to write the bootable image to the USB drive. To do so, run the following command:

`sudo dd bs=1m if=/Path/to/fileimage.iso of=/dev/diskN`

[image here]
Depending on the size of the image, this can take several minutes. You can check the progress of the process by pressing *Ctrl+T* on the screen. Once finished, run the following command to eject the disk from the computer gracefully.

`diskutil eject /dev/diskN`

Don't forget to replace the *N*!

## Even more deeper details
Now that you understand the commands, let's take a detailed look at the [verbs](https://en.wikipedia.org/wiki/Command_verb "Verbs") and the switches we used in the commands.

* `diskutil`: We used the following verbs with this command.
    * `list`: This option lists all the drives that are attached and mounted on the operating system
    * `eraseDisk` (note the capital D): This option will erase the disk that is provided as an option. It also takes the following arguments:
        *  Filesystem Type: Choose from FAT32, NTFS, EXT4 etc.
        * Label: The name to be given to the disk
        * Format: The format type of the disk. Valid Values are: APM (Apple Partition map), GPT (GUID Partition Table) and MBR (Master Boot record). Using MBR will ensure that the drive will be bootable on non-Mac machines as well.
        * Device: The device number that we noted earlier.   
        **Note**: This option needs `sudo` or `root` privileges to run.
    * `unmountDisk`: This will unmount the entire disk including all the volumes that may be present on the disk. It needs the device argument to work.
    * `eject`: This will eject the disk from the computer and make it safe for the removal media to be removed from the computer without the risk of data corruption.


* `dd`: **[dd](https://en.wikipedia.org/wiki/Dd_(Unix))** stands for *data duplicator* and is used to copy and transform data from one device to another. It is a low level Linux command line utility which will be a great addition in any system administrator's toolkit. We used the following verbs and switches in this exercise:
    * `bs`: Stands for block size. The default block size for `dd` utility is 512 bytes and there's not one right size for setting a block size. There is a good discussion [here](https://stackoverflow.com/questions/6161823/dd-how-to-calculate-optimal-blocksize "dd: How to calculate optimal blocksize?"). This operand sets both the input block size and output block size to the desired value which I have used as 1 mb.
    * `if`: Denotes the input file where the `dd` should read from instead of standard input.
    * `of`: Denotes the destination where `dd` should write to instead of standard output.

## Conclusion:
That's it for now. I hope this short tutorial has been helpful to you. Instead of using the GUI tools, I have found that using these command line utilities provide a lot of flexibility and power to the system administrator but can be confusing at times and have potential to destroy data if used incorrectly.