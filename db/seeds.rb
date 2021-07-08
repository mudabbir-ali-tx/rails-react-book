
9.times do |i|
    Book.create(
      name: "Book #{i + 1}",
      description: 'Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns Harrys struggle against Lord Voldemort, a dark wizard who intends to become immortal, overthrow the wizard governing body known as the Ministry of Magic and subjugate all wizards and Muggle.',
      author: '	J. K. Rowling'
    )
  end


  9.times do |i|
    Article.create(
      name: "Article #{i + 1}",
      comment: 'Grow your business with Google Ads, Ok ,ok',
      description: 'Be seen by customers at the very moment they are searching on Google for the things you offer. Plus, get your spend matched up to $45 in ad credit when you advertise on Google Ads'
    )
  end