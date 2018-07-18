#pragma once
#define DEBUG

//Ñ¡ÔñÅÅĞòÄ£°å
//µİÔöÅÅĞò
template<typename T>//int char
auto Selection(T *x, int n)
{
#ifdef DEBUG
	int count=0;
#endif // DEBUG
	int i, j;
	T max;
	while (n--) {
		max = *(x + n);
		i = j = n;
		while (i--) {
#ifdef DEBUG
		count++;
#endif // DEBUG
			if (*(x + i)>max) {
				max = *(x + i);
				j = i;
			}
		}
		*(x + j) = *(x + n);
		*(x + n) = max;
	}
#ifdef DEBUG
	return count;
#endif // DEBUG
}