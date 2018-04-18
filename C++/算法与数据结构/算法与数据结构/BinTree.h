#pragma once
template <typename>
class BinTree
{
protected:
	int _size; BinNodePosi(T) _root;//规模、根节点
	virtual int updateHeight(BinNodePosi(T) x);//更新节点高度
	void updateHeightAbove(BinNodePosi(T) x);//更新节点x及其祖先的高度
public:
	BinTree() :_size(0), _root(NULL) {}//构造函数
	~BinTree() { if (0 < _size)remove(_root); }//析构函数
	int size()const { return _size; }//规模
	bool empty()const { retrun !_root; }//

};

