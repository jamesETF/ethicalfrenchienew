+++
fragment = "config"


[[config]]
  type = "js"
  block = true # Default is false
  html = """
  <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Why Would Anyone Finance a puppy?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sometimes there's a strong desire to bring a puppy home before the budget permits. For this scenario, for most people, smaller monthly payments are easier."
                }
            },
            {
                "@type": "Question",
                "name": "Why are French Bulldogs so expensive?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "French Bulldog Puppies are expensive because they cannot mate or breed naturally and require artificial insemination. French Bulldogs also cannot have natural births, each birth must be a C-Section. However, to help you with the costs you can apply for financing for one of our puppies through our partner."
                }
            },
            {
                "@type": "Question",
                "name": "I’m on a budget, can I get a French Bulldog this week?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! All you must do is apply with one of the financing company we work with. The process is very smooth and fast after you get approved and you can bring your Frenchie puppy home within days."
                } 
            },
            {
                "@type": "Question",
                "name": "How long is the application process?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The process is very quick and only takes a few minutes to get pre-approved. After the paperwork is filled out by both parties, we can start scheduling the date of the puppy pick up/delivery. 
                    We work with a highly reliable flight nanny in case the delivery to another state Is required. The cost of the flight nanny (if you are out of state) can be included in your financing fee as well."
               }
            },
            {
                "@type": "Question",
                "name": "What are my options, other than financing?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You can always reach out to local rescues, or nationwide French Bulldog rescues and open your home to a French Bulldog adult in need. 
                    Another suggestion that we have would be reaching out to local breeders and inquiring about their adult French Bulldogs that they are planning to retire. The fee is usually anything between 500-1000$, depending on the breeder and the area."
               }
            }
        ]
    }
</script>
  """
+++