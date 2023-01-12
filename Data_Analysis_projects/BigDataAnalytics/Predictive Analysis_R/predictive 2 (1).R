install.packages('tidyverse')
library(dplyr)
library(ggplot2)
library(readr)
library(tidyverse)

carbook <- read_csv("carbook.csv")

cardf <- carbook %>% select(c(name, selling_price,mileage))
view(cardf)

str(cardf)

#Changing mileage format
cardf$mileage<- gsub("kmpl","",as.character(cardf$mileage))
view(cardf$mileage)

# checking for null values
sum(is.na(cardf))

#Linear regression model
car_lm = lm(mileage~name, data = cardf)
summary(car_lm)

car_lm1 = lm(mileage~name +selling_price, data = cardf)
summary(car_lm1)

#checking for coefficients
coefs <- coefficients(car_lm1)

#sorting the coefficients
coefs_sorted <- coefs[order(coefs)]

tail(coefs_sorted)

#graph 
barplot(coefs_sorted, ylim = c(0,30))
