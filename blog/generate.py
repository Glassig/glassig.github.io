# Create a new static entry for a file
import sys

posts = [
    "1.rebase.html",
    "2.solid.html"
]

def main():
    if (len(sys.argv)) > 1:
        for arg in sys.argv[1:]:
            generateFromFile(arg, int(arg[0:1]) - 1)
            print("Remember, if new file, change the previous file's 'forward' location")
    else:
        for index in range(0, len(posts)):
            generateFromFile(posts[index], index)

def generateFromFile(filename, index):
    layout = open("layout.html", "r").read()
    entry = open("originals/{0}".format(filename), "r").read()

    entry_data, entry_content = entry.split("-----", 1)
    title, subtitle, date = parseMetadata(entry_data)

    back = getBackAdress(index)
    forward = getForwardAdress(index)

    destination = open("posts/{0}".format(filename), "w+")
    destination.write(layout
        .replace("{{title}}", title)
        .replace("{{subtitle}}", subtitle)
        .replace("{{date}}", date)
        .replace("{{back}}", back)
        .replace("{{forward}}", forward)
        .replace("{{content}}", entry_content)
    )
    print("Wrote blog: " + filename)

def parseMetadata(data):
    for line in data.splitlines():
        category = line.split(":")[0]
        if category == "date":
            date = line.split(":")[1].strip()
        elif category == "title":
            title = line.split(":")[1].strip()
        elif category == "subtitle":
            subtitle = line.split(":")[1].strip()
    return title, subtitle, date

def getBackAdress(index):
    if index > 0:
        return posts[index - 1]
    elif index <= 0:
        return "/blog/index.html"
def getForwardAdress(index):
    if index < len(posts) - 1:
        return posts[index + 1]
    else:
        return posts[index]

if __name__ == "__main__":
    main()
