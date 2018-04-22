#include"PolyList.h"

int PolyList::add(const PolyList &p, double *coefs, int *exps) const
{
	int count = 0, i = 0, j = 0;
	while (i<num_of_items && j<p.num_of_items)
	{
		if (pexps[i] == p.pexps[j])
		{
			if (pcoefs[i] != -p.pcoefs[j])
			{
				coefs[count] = pcoefs[i] + p.pcoefs[j];
				exps[count] = pexps[i];
				count++;
			}
			i++; j++;
		}
		else if (pexps[i] < p.pexps[j])
		{
			coefs[count] = pcoefs[i];
			exps[count] = pexps[i];
			count++; i++;
		}
		else
		{
			coefs[count] = p.pcoefs[j];
			exps[count] = p.pexps[j];
			count++; j++;
		}
	}
	if (i<num_of_items)
		while (i<num_of_items)
		{
			coefs[count] = pcoefs[i];
			exps[count] = pexps[i];
			count++; i++;
		}
	else
		while (j<p.num_of_items)
		{
			coefs[count] = p.pcoefs[j];
			exps[count] = p.pexps[j];
			count++; j++;
		}
	return count;
}
int PolyList::subtract(const PolyList &p, double *coefs, int *exps) const
{
	int count = 0, i = 0, j = 0;
	while (i<num_of_items && j<p.num_of_items)
	{
		if (pexps[i] == p.pexps[j])
		{
			if (pcoefs[i] != p.pcoefs[j])
			{
				coefs[count] = pcoefs[i] - p.pcoefs[j];
				exps[count] = pexps[i];
				count++;
			}
			i++; j++;
		}
		else if (pexps[i] < p.pexps[j])
		{
			coefs[count] = pcoefs[i];
			exps[count] = pexps[i];
			count++; i++;
		}
		else
		{
			coefs[count] = -p.pcoefs[j];
			exps[count] = p.pexps[j];
			count++; j++;
		}
	}
	if (i<num_of_items)
		while (i<num_of_items)
		{
			coefs[count] = pcoefs[i];
			exps[count] = pexps[i];
			count++; i++;
		}
	else
		while (j<p.num_of_items)
		{
			coefs[count] = -p.pcoefs[j];
			exps[count] = p.pexps[j];
			count++; j++;
		}
	return count;
}
PolyList::PolyList()
{
	pcoefs = nullptr;
	pexps = nullptr;
	num_of_items = 0;
}
PolyList::PolyList(double coefs[], int exps[], int size)
{
	num_of_items = size;
	pcoefs = new double[num_of_items];
	pexps = new int[num_of_items];
	int i;
	for (i = 0; i<num_of_items; i++)
	{
		pcoefs[i] = coefs[i];
		pexps[i] = exps[i];
	}
	//按指数排序（冒泡排序） 
	for (i = num_of_items; i>1; i--)
	{
		bool exchange = false;
		for (int j = 1; j<i; j++)
		{
			if (pexps[j] < pexps[j - 1])
			{ //交换pexps[j]和pexps[j-1] 
				int temp1 = pexps[j];
				pexps[j] = pexps[j - 1];
				pexps[j - 1] = temp1;
				//交换pcoefs[j]和pcoefs[j-1] 
				double temp2 = pcoefs[j];
				pcoefs[j] = pcoefs[j - 1];
				pcoefs[j - 1] = temp2;
				exchange = true;

			}
		}
		if (!exchange) break;
	}
}
PolyList::PolyList(const PolyList &p)
{
	num_of_items = p.num_of_items;
	pcoefs = new double[num_of_items];
	pexps = new int[num_of_items];
	for (int i = 0; i<num_of_items; i++)
	{
		pcoefs[i] = p.pcoefs[i];
		pexps[i] = p.pexps[i];
	}
}
PolyList::~PolyList()
{
	delete[]pcoefs;
	delete[]pexps;
	pcoefs = nullptr;
	pexps = nullptr;
	num_of_items = 0;
}
PolyList& PolyList::operator=(const PolyList &p)
{
	delete[]pcoefs;
	delete[]pexps;
	num_of_items = p.num_of_items;
	pcoefs = new double[num_of_items];
	pexps = new int[num_of_items];
	for (int i = 0; i<num_of_items; i++)
	{
		pcoefs[i] = p.pcoefs[i];
		pexps[i] = p.pexps[i];
	}
	return *this;
}
int PolyList::degree() const
{
	if (num_of_items == 0)
		return 0;
	else
		return pexps[num_of_items - 1];
}
double PolyList::evaluate(double x) const
{
	double sum = 0;
	for (int i = 0; i<num_of_items; i++)
	{
		double temp = pcoefs[i];
		for (int j = 0; j<pexps[i]; j++)
			temp *= x;
		sum += temp;
	}
	return sum;
}
bool PolyList::operator==(const PolyList &p) const
{
	if (num_of_items != p.num_of_items) return false;
	for (int i = 0; i<num_of_items; i++)
		if (pcoefs[i] != p.pcoefs[i] || pexps[i] != p.pexps[i])
			return false;
	return true;
}
bool PolyList::operator!=(const PolyList &p) const
{
	return !(*this == p);
}
PolyList PolyList::operator+(const PolyList &p) const
{
	double *coefs = new double[num_of_items + p.num_of_items];
	int *exps = new int[num_of_items + p.num_of_items];
	int count = add(p, coefs, exps);
	PolyList temp(coefs, exps, count);
	delete[]coefs;
	delete[]exps;
	return temp;
}
PolyList PolyList::operator-(const PolyList &p) const
{
	double *coefs = new double[num_of_items + p.num_of_items];
	int *exps = new int[num_of_items + p.num_of_items];
	int count = subtract(p, coefs, exps);
	PolyList temp(coefs, exps, count);
	delete[]coefs;
	delete[]exps;
	return temp;
}
PolyList PolyList::operator*(const PolyList &p) const
{
	PolyList sum, temp = *this;
	for (int i = 0; i<p.num_of_items; i++)
	{
		for (int j = 0; j<num_of_items; j++)
		{
			temp.pcoefs[j] = pcoefs[j] * p.pcoefs[i];
			temp.pexps[j] = pexps[j] + p.pexps[i];
		}
		sum += temp;
	}
	return sum;
}
PolyList &PolyList::operator+=(const PolyList &p)
{
	double *coefs = new double[num_of_items + p.num_of_items];
	int *exps = new int[num_of_items + p.num_of_items];
	int count = add(p, coefs, exps);
	delete[]pcoefs;
	delete[]pexps;
	pcoefs = coefs; //有多余的空间，实际的项数由count决定。 
	pexps = exps; //同上。 
	num_of_items = count;
	return *this;
}
PolyList &PolyList::operator-=(const PolyList &p)
{
	double *coefs = new double[num_of_items + p.num_of_items];
	int *exps = new int[num_of_items + p.num_of_items];
	int count = subtract(p, coefs, exps);
	delete[]pcoefs;
	delete[]pexps;
	pcoefs = coefs; //有多余的空间，实际的项数由count决定。 
	pexps = exps; //同上。 
	num_of_items = count;
	return *this;
}
PolyList &PolyList::operator*=(const PolyList &p)
{
	PolyList sum, temp = *this;
	for (int i = 0; i<p.num_of_items; i++)
	{
		for (int j = 0; j<num_of_items; j++)
		{
			temp.pcoefs[j] = pcoefs[j] * p.pcoefs[i];
			temp.pexps[j] = pexps[j] + p.pexps[i];
		}
		sum += temp;
	}
	*this = sum;
	return *this;
}