# Sahana Senthil’s student-athlete portfolio

The four recruiting pages are **About Me** at `/`, **Soccer** at `/soccer/`, **Track** at `/track/`, and **Contact Me** at `/contact/`. Jekyll builds them with the repository’s al-folio theme. You can update every profile from GitHub’s file editor.

## Edit the portfolio

| Content      | File                | What to change                                                                                                                                                                              |
| ------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name         | `_config.yml`       | Edit `first_name`, `middle_name`, and `last_name`. Clear the middle name if you prefer.                                                                                                     |
| Introduction | `_data/athlete.yml` | Fill in school, graduation year, bio, interests, goals, portrait path, and portrait alt text.                                                                                               |
| Academics    | `_data/athlete.yml` | Enter the two GPAs, rank, and test scores under `academics`. Add courses under `coursework` and the intended major under `major`.                                                           |
| Awards       | `_data/athlete.yml` | Add entries under the appropriate category in `awards`. Each accepts a name, organization, year, description, and optional photo and alt text.                                              |
| Soccer       | `_data/soccer.yml`  | Fill in player details under `profile`. Add clubs, seasons, highlight reels, profile links, or gallery photos to their respective lists.                                                    |
| Track        | `_data/track.yml`   | Enter events, records, performances, achievements, recruiting links, and photos.                                                                                                            |
| Contact      | `_data/athlete.yml` | Under `contact`, enter only the public email, phone, general location, social links, or coach details you have permission to share. Sport-specific profile links also appear on Contact Me. |

A blank value means the detail is pending. Leave unused optional fields blank. To add the first item to a list, remove the `[]` after its name and add an indented line beginning with `-`. Copy that block to add another item. Keep the indentation and use spaces. Quote performance marks, dates, phone numbers, and values with punctuation. The examples below use placeholders. Replace them before publishing.

### Biography, academics, and awards

A short paragraph fits on the `bio:` line. Use a list such as `coursework: ["Course title", "Another course title"]`. For awards, expand one of the existing categories:

```yaml
awards:
  Academic awards:
    - name: "Award title"
      organization: "Issuing organization"
      year: "YYYY"
      description: "What the award recognized"
  Athletic awards: []
  Leadership awards: []
  Community service and extracurricular achievements: []
```

### Soccer teams, statistics, and video

```yaml
teams:
  - name: "Team name"
    designation: "Club or high school"
    league: "League name"
    level: "Competition level"
    years: "Seasons played"
    position: "Position"
    accomplishments: "Team accomplishment"

seasons:
  - season: "YYYY–YY"
    team: "Team name"
    played:
    starts:
    goals:
    assists:
    minutes:
    extra:

reels:
  - title: "Highlight title"
    youtube_id: "VIDEO_ID"
    description: "What the clip shows"
    date: "YYYY-MM-DD"
```

Start each season label with a four-digit year for chronological sorting. Enter numeric totals or leave unknown values blank. A career total appears only when every season has a value for that column. Change `extra_stat_label` to the position-specific statistic you record.

For YouTube, copy the ID following `watch?v=` or `youtu.be/`; the player supplies the preview image. For Hudl or another external video, use `url` instead of `youtube_id` and optionally add a local `thumbnail` image path. Add recruiting accounts under `profiles` as entries with `label` and `url`.

### Track records, results, and charts

```yaml
records:
  - event: "Event name"
    mark: "Official time or measurement"
    venue: "Indoor or outdoor"
    meet: "Meet name"
    date: "YYYY-MM-DD"
    season: "Season label"
    featured: true

performances:
  - event: "Event name"
    season: "Season label"
    date: "YYYY-MM-DD"
    meet: "Meet name"
    mark: "Official mark"
    season_best: true
    chart_value:
    unit: "seconds"
```

Keep one current record per event. Set `featured: true` to show it in a record card. Add one performance per meet and mark the best result per event and season. A chart appears for an event with at least two numeric season bests. Use the same unit throughout each event, such as seconds for running or meters for jumps. The chart plots the recorded mark, and the adjacent table provides the exact results. Track achievements use the same fields as awards. Use the `profiles` list for MileSplit and Athletic.net.

### Photographs and contact links

Upload compressed JPG or WebP files to `assets/img/profile/`, `assets/img/soccer/`, `assets/img/track/`, or `assets/img/awards/`. For a portrait, set `portrait` and `portrait_alt`. For an award, set `photo` and `alt`. For a team, use `image` and `alt`. Add sport gallery entries like this:

```yaml
photos:
  - image: "/assets/img/soccer/your-photo.jpg"
    alt: "Describe the play visible in this photograph"
    caption: "Optional match or event caption"
```

Filenames are case-sensitive. The two cover photographs are illustrative Unsplash images. Replace `assets/img/soccer/pitch.jpg` and `assets/img/track/race.jpg` to change the covers and home-page links together.

Use full HTTPS addresses for profile links. A social entry in `contact.social` has the same form as a sport recruiting link:

```yaml
profiles:
  - label: "Platform name"
    url: "https://example.com/your-profile"
```

Email and phone links appear automatically when filled in. Use an international phone number in quotes. Leave all coach fields empty until public contact details are available.

## Preview locally

Use Ruby 3.3 with Bundler, Node.js with npm, Git, and ImageMagick. From the repository root run:

```sh
bundle install
npm ci
bundle exec jekyll serve
```

Open the local address printed by Jekyll, usually `http://localhost:4000/`. Restart the server after editing `_config.yml`. Run `bundle exec jekyll build` for a static build in `_site/`.

## Publish with GitHub Pages

Commit the edited files and push to `main` when ready. The existing **Deploy site** workflow builds the site and publishes its output to `gh-pages`. In the repository’s **Settings → Pages**, select **Deploy from a branch**, `gh-pages`, and `/ (root)`. Check the **Actions** tab for a successful run. The configured public address is [sahana-senthil11.github.io](https://sahana-senthil11.github.io/).
