# One-pass fixer: give every KG note a human-readable frontmatter `title:` and
# remove the duplicate leading `# H1` from the body. Quartz derives the page
# title (ArticleTitle + Explorer sidebar label) from frontmatter title; without
# it Quartz falls back to the file stem (e.g. "src_cgen_2025__Q01") and the body
# H1 is rendered too -> non-readable + doubled title. This fixes both.
import os, re, glob

KG = "E:/giovanni/Dropbox/insegnamento/Wiligelmo/OlimpiadiMatematica/raccoltaGareMate/Knowledge Graph"
SKIP = {"index.md", "_Home.md"}

def process(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    if not text.startswith("---"):
        return False
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
    if not m:
        return False
    fm, body = m.group(1), m.group(2)
    # find first non-empty body line; if it's an H1, take it as the title
    lines = body.split("\n")
    i = 0
    while i < len(lines) and lines[i].strip() == "":
        i += 1
    if i >= len(lines):
        return False
    hm = re.match(r"^#\s+(.+?)\s*$", lines[i])
    if not hm:
        return False
    title = hm.group(1).strip()
    # drop the H1 line (and a single following blank line)
    del lines[i]
    if i < len(lines) and lines[i].strip() == "":
        del lines[i]
    body = "\n".join(lines)
    # set/replace frontmatter title
    esc = title.replace('"', "'")
    if re.search(r"^title:\s*", fm, re.M):
        fm = re.sub(r"^title:.*$", f'title: "{esc}"', fm, count=1, flags=re.M)
    else:
        fm = f'title: "{esc}"\n' + fm
    out = f"---\n{fm}\n---\n{body}"
    if out != text:
        with open(path, "w", encoding="utf-8", newline="\n") as f:
            f.write(out)
        return True
    return False

def main():
    n = 0; tot = 0
    for path in glob.glob(KG + "/**/*.md", recursive=True):
        if os.path.basename(path) in SKIP or os.sep + "_attachments" + os.sep in path:
            continue
        tot += 1
        try:
            if process(path):
                n += 1
        except Exception as e:
            print("ERR", path, e)
    print(f"fixed {n} / {tot} notes")

if __name__ == "__main__":
    main()
