# Shoutem UI

Shoutem UI has a lot of very nicely designed components. 
It takes a bit of time to understand exactly how to structure these components to get the most out of pre-build designs.

The framework revolves around particular documented nesting patterns. 
It introduces base components that are meant to provide specific functionality and when nested together to create intricate designs.
Not all component can be arbitrarily nested, there are particular wrappers that must be used to accommodate for layout patterns.

An issue I've noticed is when mixing react-native and @shoutem/ui components. When nesting in default react-native the design begins to fall apart. 
This is because most @shoutem/ui component have internal positive or negative margins to account for their design patterns.

Particularly issues I've noticed relate to NavigationBar, Screen and View components. Where different components overlap and hide others in some instances.

Instead of providing the different layout possibilities it would have been better to just provide the styling that each component provides.
This would make the documentation much easier to follow.

# Shoutem Theme

Shoutem Theme currently doesn't work as intended.

When StyleProvider is added to wrap the app it removes all default styling.

The intended behaviour is for for theme styling to add or replace default styling which isn't how it works at the moment.

# Final Thoughts
Shoutem Provides very nice components that look great right out of the box.

Since at the moment Shoutem Theme doesn't work as intended I could see myself using their element for particular 
components within my application but not for the whole project.
