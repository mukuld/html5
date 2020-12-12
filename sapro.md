## Introduction

They say it is one of the most difficult [AWS certification exam](https://aws.amazon.com/certification/?nc2=h_ql_le_tc_c). I am very excited that I passed it in the first attempt. To tell the truth, I was extremely nervous about the exam. You see, till I joined [AWS](https://aws.amazon.com) in March 2019, I didn't have any experience or even exposure to AWS. I knew about [cloud and what it is and what it can do for businesses](https://en.wikipedia.org/wiki/Cloud_computing) of course, but didn't really know about the technologies, the architecture, the scope and depth of AWS. From there to now when I am a [Certified Solution Architect](https://aws.amazon.com/certification/certified-solutions-architect-professional/) for AWS at a professional level is huge. Even if I say so myself. So how did I get here? Well, that's the story I am going to tell here. I promise I won't bore you with any gory details of what the technology is and how I spent hours and hours studying and reading (which incidentally I did), but this will be quick recap of my experience and what I found useful and what to ignore.

## The Prep

It took me about 6 months exactly to date to take this test from the time I appeared for my previous exam. Not all the time was spent on studying and preparing for the exam. There were times when I got derailed and didn't quite study for days at end. But overall I anticipate it would take somewhere in the range of 3-4 months at a minimum to really prepare well for this exam. I initially started with the [SA Pro course](https://linuxacademy.com/cp/modules/view/id/245) on [Linux Academy](https://www.linuxacademy.com) as I had really good experience with it during the [SA Associate](https://linuxacademy.com/cp/modules/view/id/341) exam and the course is really in-depth with the trainer - [Adrian Cantrill](https://cantrill.io/) going deep technically and provides a lot of hands-on demonstration and labs along with a lot of links to product documentation which is immensely helpful to read and understand the service and product in detail.. And it was definitely helpful to be familiar with the screens even though they were outdated. And that was the problem with that course. It was made in early 2019 and for a myriad of reasons, it has not been updated and now that [A Cloud Guru](https://acloudguru.com/) has acquired Linux Academy, ACG is pushing students to use their [course](https://acloudguru.com/course/aws-certified-solutions-architect-professional-2020). And since it was slightly more updated and recent, I completed that course as well. It has nowhere near the depth and detail of the LA course, but the trainer - [Scott Pletcher](https://scottpletcher.com/) does a fantastic job of explaining the concepts and preparing the student for the real world scenarios and walks through the questions step by step which was helpful. More importantly, he provides a lot of links of re:Invent videos and links to white papers which are crucial to read before even considering to take the exam.

## Reading

There are so many whitepapers on the AWS site that you can spend all your time reading those for several months and not get through it. So you need to be very judicious in choosing which ones to read. My recommendation is to read the following ones without fail. There is also some recommendations on the AWS training site which provides some guidance on preparing for the exam.

* [Overview of AWS services](https://d0.awsstatic.com/whitepapers/aws-overview.pdf)
* [Web application hosting in the AWS Cloud](https://d1.awsstatic.com/whitepapers/aws-web-hosting-best-practices.pdf)
* [AWS Migration Whitepaper](https://d1.awsstatic.com/whitepapers/Migration/aws-migration-whitepaper.pdf)
* [Migrating AWS Resources to a new region](https://d1.awsstatic.com/whitepapers/aws-migrate-resources-to-new-region.pdf)
* [AWS Storage Services Overview](https://d1.awsstatic.com/whitepapers/AWS%20Storage%20Services%20Whitepaper-v9.pdf)
* [AWS Key Management Service best practices](https://docs.aws.amazon.com/whitepapers/latest/kms-best-practices/kms-best-practices.pdf#welcome)
* [AWS Database Migration Service best practices](https://d1.awsstatic.com/whitepapers/RDS/AWS_Database_Migration_Service_Best_Practices.pdf?did=wp_card&trk=wp_card)

Although there are a few more you should read, but these are the absolute minimum.

The FAQs on the AWS site are also a very valuable resource and it has a lot of information. FAQs have been vilified by its overuse and nonsense FAQs that some companies put on their sites. But the FAQs that AWS has put together are really very high quality and it provides great overview of the service and its boundaries and capabilities. Spend some time going through as much as you can but at a minimum review the following:

* [S3](https://aws.amazon.com/s3/faqs/)
* [Auto Scaling](https://aws.amazon.com/autoscaling/faqs/)
* [Elastic Load Balancing](https://aws.amazon.com/elasticloadbalancing/faqs/)
* [KMS](https://aws.amazon.com/kms/faqs/)
* [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/faqs/)
* [Route 53](https://aws.amazon.com/route53/faqs/)

The next resource is the product documentation. Product documentation can be very long and boring and at times confusing. But the level of detail it provides is just amazing. You may not have to read the developer guide cover to cover, but figure out which areas are a little weak for you and invest time in reading that section of the documentation. Regardless of your comfort level, one of the most important documentation you can read is AWS Organizations. It is really useful. But consider reading some of the documentation from the list below.

* [AWS Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html)
* [Amazon Route 53](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)
* [Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)
* [CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
* [CloudFormation](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html)

## Watching

[Youtube](https://www.youtube.com) is a great resource if you use it well. AWS has created its [own channel](https://www.youtube.com/channel/UCd6MoB9NC6uYN2grvUNT-Zg) and they post [re:Invent videos](https://www.youtube.com/playlist?list=PLhr1KZpdzukenb7A9aDtk3qHqMwy2Baxq) on that channel and a lot of tech talks that they host. They are great and can provide 300-400 level information. I strongly recommend that you spend some time watching the re:Invent videos. Make sure to watch the re:Invent videos that are at least 6 months old as services and features announced within six months will not appear on the exam. I recommend watching the videos for:

* [Lambda: Serverless Journey](https://www.youtube.com/watch?v=xmacMfbrG28&t=2s)
* [Scalable Serverless Event Driven Applications](https://www.youtube.com/watch?v=2rikdPIFc_Q)
* [Serverless APIs](https://www.youtube.com/watch?v=tIfqpM3o55s)
* [Building microservices](https://www.youtube.com/watch?v=TOn0xhev0Uk&t=76s)
* [DynamoDB](https://www.youtube.com/watch?v=6yqfmXiZTlM)
* [API Gateway Video 1](https://www.youtube.com/watch?v=yfJZc3sJZ8E)
* [Operating Serverless APIs](https://www.youtube.com/watch?v=tIfqpM3o55s)
* [HTTP APIs](https://www.youtube.com/watch?v=2yg0XgEjtbA)
* [Aurora Serverless 1](https://www.youtube.com/watch?v=4DqNk7ZTYjA&)
* [Aurora Serverless 2](https://www.youtube.com/watch?v=9mTwxghXvlE)
* [AWS KMS](https://www.youtube.com/watch?v=hxWvbNvj2lg)
* [AWS Fargate](https://www.youtube.com/watch?v=Hr-zOaBGyEA)

## Practice

Finally, there is no substitute to practice. Take as many practice tests as you can. [Whizlabs](https://www.whizlabs.com/) has a lot of practice exams. Although I found the questions to be oriented more toward development and some of the answers were flat out wrong, but it helped clarify things quite a bit and forced me to read product documentation which otherwise I would not have read.

## Exam day

Finally on the exam day, take plenty of rest and calm your mind down. If you are into meditation, then I would recommend meditate for some time before going to the exam. It really helps with the concentration as the exam is really long at 180 minutes and 75 questions and it can be very intense. If not, then find the way in which you groove the best and go for it. In today's world sitting in one place without having any gadgets and / or notifications is not very easy. A couple of hours before the exam, avoid drinking too many fluids as there are no breaks in between and if you need to use the rest room, the exam timer continues to wind down. So plan accordingly.

Reading long questions and longer answers is very tedious and it is very easy to miss an important point. One of the strategies in reading long answers is to read them vertically. While the technical definition of vertical reading is very different, I am using vertical reading to mean that you scan the text of the answers vertically and try to identify the salient points that differ and would make sense in that scenario. In several situations, the answers are very similar with only one or two things different in each answer. Focus on that. Choose the one that BEST suits the situation asked in the question. Reading horizontally can tire you out and it is very easy to get lost in the word jungle and miss the right answer.

With all this preparation, it is possible that during the exam you might feel that the exam is easy and you may lose concentration and focus. The trick is to take few very short breaks at a strategic intervals to keep focus and stay sharp. The exam center provides you with a piece of paper and pencil. Use it to draw architecture diagrams to visualize the question and also write down your thoughts. It helps.

## Final thoughts

With all these preparation, I am certain you will pass the exam easily and with flying colors. AWS certified solutions architect professional is a very valuable certification which not only will enhance your career prospects, but also help in increasing and improving your understanding of the cloud and highly scalable, resilient and highly available architectures.

All the best!
