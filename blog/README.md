# The blog
_Why did I do this?_ I don't really know. I am not planning on updating this blog regularly.

The idea came from when I was going to do a presentation on SOLID. Before I started on the powerpoint, I decided to write notes down, but because I am bad at it, I wrote a mini essay. So, since I had spent so much time on writing a text about SOLID, might as well post it somewhere. Earlier this year I also had a lecture on Git and rebase, so I thought I might as well take all that research and write it down.

## Development
Create a blog post by creating a file in [originals](originals). The filename should follow the pattern: `<number>.<topic>.html`. It needs to look something like:
```
date:
title:
subtitle:
-----
html
```
It doesn't matter the order for the meta-data, but they should be there. 
When you are done, run the python script: `python3 generate.py [filename]`, where filename can be the filename without the folder. If you don't have the filename, it will just build for every blog post. 

It should be noted that if you add a new file, you should edit the forward address in the previous blog post. I am too lazy to automate that.
