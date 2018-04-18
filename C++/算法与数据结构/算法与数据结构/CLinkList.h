#pragma once
#include<cstdlib>

template <class T>
class CLinkList
{
protected:
	T *head,*next;
public:
	CLinkList();
	int length();
	ClinkList add(T node);
	~CLinkList();
};
