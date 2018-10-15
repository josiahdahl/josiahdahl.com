---
templateKey: portfolio-item-page
featured: true
slug: /portfolio/sar-alerts/
title: SAR Alerts
summary: >-
  Dashboard for Search & Rescue operations, monitoring current weather, tides, and weather warnings.
tags:
  - 'Vue'
  - 'Laravel'
  - 'Flask'
  - 'Web Scraping'
repository: https://github.com/josiahdahl/sar-alerts
demo: https://sar-alerts.josiahdahl.com
screenshots:
---
SAR Alerts is a prototype dashboard build for Royal Canadian Marine Search & Rescue (RCM-SAR) Station 37 in Sooke, Britsh
Columbia, Canada. It is meant to be on display at the boathouse so that when volunteers muster for a mission they
can quickly and easily see the current weather, the present tide status, and any weather warnings from the Government of Canada
in selected areas.

It was designed to be a multi-tenant application so many stations could use it and manage their own settings,
 though the project was scrapped before it got to that stage. It all started when I reached out to a member of the RCM-SAR 
 who posted on Reddit that they needed a hand bringing functionality to their design. Over the next month and a half
 I worked with him to build a prototype that satisfied the requirements above.
 
The frontend is built with VueJS, the backend is built with Laravel, and the data scraping service is built
with Flask and BeautifulSoup
 
**Weather**

Weather is pulled from [OpenWeatherMap](https://openweathermap.org). Due to API limits and the fact that 
weather doesn't change that fast, responses are cached server side for 30 minutes.

**Tides**

The Government of Canada provides a page with a table tide data for a week. I built a scraper using 
BeautifulSoup. The scraper is controlled by a microservice built in Flask. Every six days the main 
application calls the microservice to queue a job to scrape the tide data and then update the main
database. In the future this could be re-built in a PHP scraping library and configured as a job in
Laravel.

**Weather Notices**

Notices are again provided by the Government of Canada through an RSS feed. When a user loads the
app, the feed is read and cached. This could be improved to automatically update the current state
and cache it so that the first request is always fast.

**User Interface**
 
The user interface provides the time and date, weather, temperature, wind speed, tide state, and any
notices for the area, along with timestamps of when the data was last updated. It has a dark theme to make it
easy on the eyes at night. The layout is optimized for a TV mounted vertically. Mobile and desktop responsiveness
were on the roadmap. 