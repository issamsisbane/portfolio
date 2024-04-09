---
title: "Speechy"
description: "The Speechy project is a project that allows recording of speech and transcribing what has been said, as well as providing a summary with the key points discussed."
lang: "en"
pubDate: "Mar 28 2024"
heroImage: "/portfolio/speechy.webp"
badge: "PERSONAL"
tags: ["Azure", "IA", "LLM", "Nuxt", "TypeScript"]
---

"This project is still under development."

## **Links**

## **Need**
This project was conducted during my free time for my personal needs. During my apprenticeship, I discovered a very important element in my work: *note-taking*. Indeed, as an apprentice, I had long periods without school and vice versa, long periods without the company. Thus, when I returned to school or the workplace, I quickly realized that **remembering everything** I did and what I was working on was **impossible**. I started taking notes and documenting **everything** I did and everything I learned, whether at school or at work. 

I started using **Google Docs** and then switched to **Notion**, which I still use today. However, after a few years, I realized that when I finished a meeting, for example, and formatted my notes, I omitted certain things because I wanted to both expand and rephrase my notes. So, I was **losing** some information. 

Then one day, I tried a tool online that allowed me to **transcribe** what I was saying, and it allowed me not to omit anything from the meeting I had just had. Furthermore, I found this method useful when brainstorming for a project, for example. 

That being said, I needed a personal platform to do this and connect it to my Notion (where I keep all my written traces).

## **Objectives**
The goal is to create a website that **transcribes** the voice recording and provides a summary and key points of that recording.

Another objective was to use AI in a real project to discover the power of these tools.

## **Methodology**

## **Technologies Used**
I am still in the process of reflection. Indeed, I started a POC using OpenAI's whisper and GPT to summarize and get the key points, however, I realized that in terms of cost, it would quickly become expensive. 

I then turned to lighter open-source models that I could run locally (for processing after transcription). It worked (a little less well than whisper, of course, because the models are lighter) and saved me from paying a lot for nothing. However, I want to be able to use this project anywhere without necessarily running an LLM on every PC I want to use. 

So, I am starting to think about hosting this model on Azure. This will save me a lot of money compared to using an LLM via OpenAI's API, for example. I could also use functions to further limit costs.

* Azure
* Nuxt
* Shadcn/ui

## **Results**
To be determined

## **Conclusion**
To be determined
