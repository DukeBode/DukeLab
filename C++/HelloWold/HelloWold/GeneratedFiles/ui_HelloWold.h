/********************************************************************************
** Form generated from reading UI file 'HelloWold.ui'
**
** Created by: Qt User Interface Compiler version 5.10.1
**
** WARNING! All changes made in this file will be lost when recompiling UI file!
********************************************************************************/

#ifndef UI_HELLOWOLD_H
#define UI_HELLOWOLD_H

#include <QtCore/QVariant>
#include <QtWidgets/QAction>
#include <QtWidgets/QApplication>
#include <QtWidgets/QButtonGroup>
#include <QtWidgets/QHeaderView>
#include <QtWidgets/QMainWindow>
#include <QtWidgets/QMenuBar>
#include <QtWidgets/QStatusBar>
#include <QtWidgets/QToolBar>
#include <QtWidgets/QWidget>

QT_BEGIN_NAMESPACE

class Ui_HelloWoldClass
{
public:
    QMenuBar *menuBar;
    QToolBar *mainToolBar;
    QWidget *centralWidget;
    QStatusBar *statusBar;

    void setupUi(QMainWindow *HelloWoldClass)
    {
        if (HelloWoldClass->objectName().isEmpty())
            HelloWoldClass->setObjectName(QStringLiteral("HelloWoldClass"));
        HelloWoldClass->resize(600, 400);
        menuBar = new QMenuBar(HelloWoldClass);
        menuBar->setObjectName(QStringLiteral("menuBar"));
        HelloWoldClass->setMenuBar(menuBar);
        mainToolBar = new QToolBar(HelloWoldClass);
        mainToolBar->setObjectName(QStringLiteral("mainToolBar"));
        HelloWoldClass->addToolBar(mainToolBar);
        centralWidget = new QWidget(HelloWoldClass);
        centralWidget->setObjectName(QStringLiteral("centralWidget"));
        HelloWoldClass->setCentralWidget(centralWidget);
        statusBar = new QStatusBar(HelloWoldClass);
        statusBar->setObjectName(QStringLiteral("statusBar"));
        HelloWoldClass->setStatusBar(statusBar);

        retranslateUi(HelloWoldClass);

        QMetaObject::connectSlotsByName(HelloWoldClass);
    } // setupUi

    void retranslateUi(QMainWindow *HelloWoldClass)
    {
        HelloWoldClass->setWindowTitle(QApplication::translate("HelloWoldClass", "HelloWold", nullptr));
    } // retranslateUi

};

namespace Ui {
    class HelloWoldClass: public Ui_HelloWoldClass {};
} // namespace Ui

QT_END_NAMESPACE

#endif // UI_HELLOWOLD_H
