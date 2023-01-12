setwd("D:/r programs/big data")
getwd()
database<- read.csv('carbook.csv')
View(database)


library(dplyr)
library(ggplot2)

#most sold car
car_name <- database$name

table(car_name)

most_selled <- as.data.frame(table(car_name))

View(most_selled)

most_selled_name<- which.max(table(car_name))

most_selled_number<- max(table(car_name))

most_sold <- most_selled %>% arrange(desc(most_selled$Freq))
vie
top10_most_sold <- head(most_sold, 10)
par(mar=c(11,4,4,4,4,4,4,4,4,4))

barplot( height=top10_most_sold$Freq, 
         names=top10_most_sold$car_name ,
         density=c(37,25,20,30,32,55,12,28,36,51) , 
         angle=c(0,45,90,11,36,20,10,15,50,80) , col="#5D8233", las = 2)

print(most_selled_name)
print(most_selled_number)

# which seller selled most and how many cars

dealer<- database$Dealer

main_dealer <- table(dealer)

print(main_dealer)

main_dealer_name<- which.max(table(dealer))

main_dealer_number<-max(table(dealer))

ggplot(as.data.frame(main_dealer), 
       aes(x = "", y = Freq, fill = dealer)) + geom_bar(stat = "identity", width = 1) + coord_polar("y", start = 0)


# average price of each car model

car_model <- database[ ,c(2,4)]

View(car_model)

choose_model <- filter(car_model, name=='Maruti Swift Dzire VDI')

print(choose_model)

avg_price <- mean(choose_model$selling_price)

print(avg_price)

ggplot(car_model, aes(x = name, y = selling_price, fill = name)) + geom_boxplot() + stat_summary(fun.y = mean, geom = "point")

#newest and oldest car
year_name <- database[ ,c(2,3)]

View(year_name)

all_year<- (table(years))

print(all_year , decreasing=TRUE)

#newest car
newest_cars=filter(year_name, year==2020)

View(newest_cars)
#oldest car
oldest_cars=filter(year_name, year==1994)

View(oldest_cars)

#best car related to price, low mileage
mileage_table <- database[ ,c(2,4,10)]

View(mileage_table)

min_price <- min(mileage_table$selling_price)

filtered_car<- filter(mileage_table, selling_price==min_price)

View(filtered_car)

mileage_table$mileage <- gsub("[a-zA-Z /]", "", mileage_table$mileage)

mileage_table$mileage <- as.numeric(mileage_table$mileage)

mileage_table$ratio <- mileage_table$selling_price / mileage_table$mileage



#total revenue of individual selling

revenue_table <- database[ ,c(4,15)]

View(revenue_table)

filtered_revenue<-filter(revenue_table, dealer=='')

View(filtered_revenue)

revenue <- sum(revenue_table$selling_price)

print(revenue)


ggplot(data = revenue_table, aes(x = Dealer, y = selling_price, fill = Dealer)) + geom_bar(stat = "identity") + coord_flip()
