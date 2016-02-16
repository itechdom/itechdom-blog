#include<stdio.h>

void swap(int *num1, int *num2);

void main() {
	int x, y;

	printf("\nEnter First number : ");
	scanf("%d", &x);

	printf("\nEnter Second number : ");
	scanf("%d", &y);

	printf("\nBefore Swaping x = %d and y = %d", x, y);
	swap(&x, &y); // Function Call - Pass By Reference

	printf("\nAfter Swaping x = %d and y = %d", x, y);
}

void swap(int *num1, int *num2) {
	int temp;
	temp = *num1;
	*num1 = *num2;
	*num2 = temp;
}
