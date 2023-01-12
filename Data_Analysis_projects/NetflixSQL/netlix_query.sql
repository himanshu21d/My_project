select * from netflix;

-- All shows with dead titles
select title from netflix
where title ilike any(array['%dead','dead%','%dead%'])

--All R-rating shows on netflix
select COUNT(title),rating from netflix
where rating = 'R'
group by rating;

-- Shows not suitable for childrens 
select rating_sub,count(distinct title) from( 
select title,
CASE when ratinglevel ilike '%suitable for children%' then replace(right(ratinglevel,13),'.','') 
	  when ratinglevel ilike '%suitable for all children%' then 'Not for children'
	  else null end as rating_sub 
from netflix ) as rating_shows
GROUP BY rating_sub;


select distinct rating_sub from (
select title,
CASE when ratinglevel ilike any(array['%suitable for children%','%unsuitable for child%']) then replace(ratinglevel,'.','') 
	  when ratinglevel ilike '%suitabl%children%' then 'Not for children'
	  else null end as rating_sub 
from netflix)a

select distinct ratinglevel from netflix

---No. of shows released for Mature audience and childrens
select distinct(age_category),"release year" as year_of_release,count(title) as Show_count from
(select title,ratinglevel,"release year",
Case when ratinglevel ilike 'Suitable for children%' then 'Children'
when ratinglevel ilike 'Suitable for all ages.' then 'everyone'
else 'Mature'
end as age_category
from netflix) as a
group by 1,2
order by 1,2;


-- Best user-rated action shows
select distinct(title),case when "user rating score" = 'NA' then null else "user rating score" end as "user rating score",ratinglevel from netflix
where ratinglevel ilike '%action%'
order by 2 desc
nulls last
limit 10;

-- Movie contribution percentage per year
with movie_count as (
select count(distinct title) as numb,"release year" from netflix
group by 2
order by 1 desc
)
, percentage as (
	select "release year", round(numb / sum(numb) over (),2) *100  as percentage_of_total
	from movie_count
)
select * from percentage
