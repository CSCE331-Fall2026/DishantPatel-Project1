# Changelog

## Peer Feedback

### 1. The navigation links were all bunched together

**Feedback:** The four links at the top (Home | Portfolio | Activities | My Passion) were all right next to each other with just a `|` between them. It looked like one long line of text instead of a menu, and it was hard to tell where one link ended and the next one started.

**Change:** I gave each link its own space by adding `margin: 0 25px` to every `nav a` in `style.css`. I also put the whole nav inside its own bar with a thin line under it and made it stick to the top of the screen so it stays there when you scroll. The links are pushed to the right side so they look like an actual menu instead of a sentence.

**Impact:** Navigation is the first thing someone uses on a site. If it looks cramped or confusing, people will not click around. Spacing the links out makes it obvious they are four separate buttons and makes the whole top of the page feel less crowded.

### 2. The Activities page was a wall of text

**Feedback:** The Activities page was just five paragraphs stacked on top of each other with nothing breaking them up. You could not tell what each paragraph was about without reading the whole thing, so it was easy to get bored and leave.

**Change:** I added an `<h3>` subheading above each activity: **Engineering Honors EDGE**, **Aggies in Tech**, **Sports & Athletics**, and **Running**. The subheadings are in the same light blue as the other headings so they match the rest of the site.

**Impact:** Subheadings let people skim. If someone only cares about the sports stuff, they can jump straight to that part instead of reading about EDGE first. It also forces each paragraph to be about one clear thing.

### 3. The text was too small and hard to read

**Feedback:** The body text was small and there was not much space between the lines, so long paragraphs were tiring to read, especially on the dark background.

**Change:** I bumped the base font size up to `18px` and set `line-height: 1.7` on the body so the lines are not stacked right on top of each other. I also made the text a light gray instead of pure white because pure white on pure black is harsh on the eyes. Headings got bigger too so there is a clear size difference between a page title, a section title, and a subheading.

**Impact:** If people cannot read the text comfortably they will not read it at all. A little more size and line spacing goes a long way, and it makes the site look more polished and less like a default HTML page.

---

## Self Reflection

### 1. The home page did not really say anything

**Realization:** The original home page was just my name and one sentence. The home page is the first thing anyone sees, so it should feel like a real landing page instead of a placeholder.

**Change:** I added a big `hero` section that fills most of the screen with "Hi, I'm Dishant Patel," in large text and a short subtitle underneath. Right below that I put LinkedIn and GitHub buttons. I went with buttons instead of a long blurb on purpose. It works kind of like marketing: you give the visitor a quick hook (I'm a CS student) and then an easy way to click through and see more. Someone lands on the page, gets curious, and one click later they are looking at my actual work on GitHub or my full background on LinkedIn.

**Impact:** The home page now makes a strong first impression on an employer, gets them to explore further, and shows a bit of my personality without being wordy. It is clear, concise, and actually grabs attention.

### 2. The projects were not really being shown off

**Realization:** The projects on the portfolio page were just a title and a paragraph. Someone reading it had to take my word for it that these things existed.

**Change:** I added a screenshot of each project and made every one link straight to its GitHub repo.

**Impact:** People can actually see what I built and click through to the code. It turns the page into a real showcase of my work instead of a list.

### 3. Design 1 looked more like a video game than a website

**Realization:** Looking at Design 1 with its black background and bright cyan text, it felt more like a game menu than a professional site. I also noticed there was no picture of me anywhere, which is kind of weird for a personal portfolio.

**Change:** That is what pushed me to make the Design 2 sketch: white background, teal and orange, serif fonts, everything laid out in clean boxes, and my headshot as the centerpiece of the home page. I kept Design 1 as it was so the two designs are clearly different from each other.

**Impact:** Design 2 has the more professional, engaging feel I was actually going for, which matters when the person looking at it might be a recruiter or a client. Having the photo there also puts a face to the name right away.
