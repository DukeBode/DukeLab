#include "clinklist.h"


template <class t>
clinklist<t>::clinklist()
{
	head = (clinklist*)malloc(sizeof(t));
	p = nullptr;
}

template<class t>
int clinklist<t>::length()
{
	return 0;
}

template<class t>
clinklist clinklist<t>::add(t node)
{
	p = node;
	return clinklist();
}

template <class t>
clinklist<t>::~clinklist()
{
	delete head;
}
