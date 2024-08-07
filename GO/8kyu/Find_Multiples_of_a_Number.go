package main

import "fmt"	

func FindMultiples(integer, limit int) []int {
	var multiples []int

	for i := 1; i <= limit; i++{
		if i % integer == 0{
			multiples = append(multiples, i)
		}

		if i == limit{
			return multiples
		}

	}


  return multiples
}


// main
func main() {
	// Test cases
	fmt.Println(FindMultiples(5, 10))
	fmt.Println(FindMultiples(1, 2))
	fmt.Println(FindMultiples(5, 25))
}