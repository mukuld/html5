# Implementing nested loops with dynamic step in Python3

## Introduction

The other day, my son asked me about the result of evaluation of program in [Java](https://www.java.com) that he had in his [AP Computer Science A](https://apstudents.collegeboard.org/courses/ap-computer-science-a) (APCSA) course. This course is as a part of his high school senior curriculum. The problem was quite simple of nested `for` loops in the control flow section. The code is as below.

```
    a = 0;
        for (i = 0; i < 10; i++) {
            for (k = 0; k <= 5; k++) {
                for (z = 1; z <= 16; z = z * 2) {
                    a++;
                }
            }
       }
    print a
```

## The problem
As you can see, the problem is simple enough. I had done this kind of `for` loop in shell scripting and in C language when I was learning it a long time ago and somehow I thought that this was the same way you run a `for` loop in [Python](https://www.python.org) as well. Of course I know Python quite well, so I thought I would quickly port this code in Python and run it to verify the answer of the problem (My son had gotten it right by the way and through a very simple mechanism, I must add).

The `for` statement is used to iterate over the elements of a sequence (such as a string, tuple or list) or other iterable object. However, Python doesn't allow the developer to define both the iteration step and halting condition. Instead Python’s `for` statement iterates over the items of any sequence (a list or a string), in the order that they appear in the sequence.

The syntax for a `for` loop in [Python](https://docs.python.org/3/reference/compound_stmts.html#the-for-statement) is very simple and intuitive like so:

```
    for i in some_list:
        <do something>
```

Most common use case is to iterate some operation a certain number of times. And the easiest way to do it is to use the [`range`](https://docs.python.org/3/library/stdtypes.html#range) function. In the range function, the structure contains the start point, end point and the step. The step takes an integer as an input and it does not accept an expression as a step. Similarly as Python doesn't allow the developer to define the iteration step in the `for` loop, it posed a problem for me as I the program above required to have the step in the powers of 2 for each loop.

## The research
I tried various combinations and options to change the step size in `range` function, but as the step is a positional argument and doesn't accept either keyword argument or an expression, the choices were limited to only integers (Range also accepts floats but it for another day). I searched far and wide for a solution but to no avail. Finally I hit on the a [possible solution](https://stackoverflow.com/questions/15725458/how-do-you-create-a-for-loop-with-a-dynamic-range) on (where else) [Stack Overflow](https://stackoverflow.com). 

The person who asked the question had a similar goal as me. The answer to the question was kind of cryptic, but I was able to figure it out as the answer pointed me in the right direction.

## The solution
The solution in the end was embarrassingly simple. Here's the final code for this: There are certain commented statements here which I have left here that I used to debug and understand what was going on.

```
    #########################################
    # Implement nested for loops in Python  #
    # Programmer: Mukul Dharwadkar          #
    # Date: 24 September 2021               #
    #########################################

    a = 0
    for i in range(10):
        for j in range(6):
            c=1
            for k in range(1, 17, c):
                while c < 17:
                    # print(f'Index c is {c}')
                    c = c * 2
                    #print(f"Index i is {i}")
                    #print(f"Index j is {j}")
                    a += 1
                #print(f"The value of a when is i, j, k and c is {i}, {j}, {k}, {c} is {a}")
    print(f'The value of a is {a}') 
```

As you can see, I needed to initialize a new counter `c` that would then be used as the step size. In the innermost `for` loop, I needed to create a stop condition as the counter was completely independent of all other variables. The `while` loop above creates that stop condition. Inside the `while` loop, I am incrementing the counter by the powers of two.

The actual operation of interest is the value of `a` which is incremented by one everytime the loop is executed. So essentially, the easy way once you figure out how many times each loop is executing is to multiple all those values (5 times 6 times 10 in this case) and arrive at the final answer of 300.

```
    The value of a is 300
```