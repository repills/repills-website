---
sections: [reactjs]
link: https://medium.freecodecamp.org/react-pattern-centralized-proptypes-f981ff672f3b
title: "React Pattern: Centralized PropTypes"
author: "Cory House"
publishedAt: 2017-11-14T00:00:00.000Z
type: [article]
topics: [props_proptypes, react_patterns]
suggestedBy: [andreamangano]
createdAt: 2018-04-07T00:20:00.858Z
reference: aHR0cHM6Ly9tZWRpdW0uZnJlZWNvZGVjYW1wLm9yZy9yZWFjdC1wYXR0ZXJuLWNlbnRyYWxpemVkLXByb3B0eXBlcy1mOTgxZmY2NzJmM2I
slug: react-pattern-centralized-proptypes-by-cory-house
abstract: "There are three popular ways to handle types in React: PropTypes, TypeScript and Flow. This post is about PropTypes, which are currently the most popular. In real apps with large objects, this quickly leads to a lot of code. That's a problem, because in React, you’ll often pass the same object to multiple components. Repeating these details in multiple component files breaks the DRY principle (don't repeat yourself). Repeating yourself creates a maintenance problem. The solution? Centralize your PropTypes."
---