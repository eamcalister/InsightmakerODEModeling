var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": ""
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " First, I would like to thank Scott Fortmann-Roe for creating Insightmaker. Without its creation, this text really wouldn't make any sense at all.  I would also like to thank those who support the use of novel pedagogies for Ordinary Differential Equations. These include Brian Winkel of SIMIODE ( ), the CODEE consortium ( ), and my colleagues at Fort Lewis College who are willing to test course materials I have created.  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "    Insightmaker is a web-based tool for simulation, decribed at length in . This text is designed as a supplement for teaching a first course in ordinary differential equations from a modeling perspective. This course is usually taken the sophomore or junior year following single-variable calculus. Topics included in the course are some mix of the following:   Modeling with first-order equations and solving analytically in some cases (linear and separable equations) and numerically when necessary and\/or helpful    Modeling with second-order equations and solving linear second-order equations analytically using a variety of techniques    Solving linear constant-coefficient (including ones with discontinuous or impulsive forces) equations using the Laplace transform    Modeling with and analyzing systems of ODEs and solving linear systems analytically     It is my feeling that a first course in ODEs should present them in as many ways as possible, provided the representations and methods contribute to the students' practical understanding and mathematical growth. With this in mind, it is important to catalog how traditional pedagogies, modeling, and Insightmaker fit into the course.   Real-world modeling, and all that goes with it (units, data, parameter estimation etc.) is emphasized. The vast majority of students in this course are Engineering majors, but some are from other scientific disciplines. Students should leave the course thinking that they now get to use differential equations to answer questions they are interested in, rather than merely check off a major requirement.    While analytic procedures are not the focus of the class, they are included for a couple of reasons. First, these techniques may appear in subsequent courses in their major and on professional exams. Second, and perhaps more importantly, analytic methods may represent a more familiar way of approaching mathematics (a met before in the terminology of David Tall). Throughout prior math courses many students have been trained to believe that answers are formulas or numbers, and they are comfortable with this idea. As we proceed throught the course, we often find occasion to compare the results of numerical or qualitative methods with analytic ones to become more comfortable with the former methods.    The addition of using Insightmaker to construct models provides students with additional semantic understanding of differential equations and the general process of modeling. By representing a model graphically, students can give practical meaning to each term of a differential equation and experiment with their effects on the model independently. The net effect is that students gain an increase in ODE literacy as well as gains in the ability to communicate mathematical ideas to both technical and non-technical audiences.     "
},
{
  "id": "Sec1_1_Insights_and_ODEs",
  "level": "1",
  "url": "Sec1_1_Insights_and_ODEs.html",
  "type": "Section",
  "number": "1.1",
  "title": "Insights and ODEs",
  "body": " Insights and ODEs  In this section we will   Understand the components of an Insight in the framework of introductory differential equations.    Work through some familiar examples from algebra and Calculus and as Insights and see how they relate to the different representations of solutions to ODEs in Insightmaker,      ODEs and IVPs  We begin by reminding ourselves what, in a purely mathematical sense, a differential equation is.  First-Order Ordinary Differential Equations Differential Equation   Let denote time, which we will take as our independent variable throughout this text. A first-order ordinary differential equation (ODE) is an equation involving some unknown function of , (the dependent variable), its derivative , and possibly . If possible, we often write our first-order differential equations in the standard form where is some function of and . A solution to an ODE is some representation (not necessarily as a formula!) of a function that makes the equation true when substituted for .  An initial value problem (IVP) is an ODE together with some specified output value at a specified input value, expressed as , i.e. we are told that the graph of the unknown function passes through the point . The equation is called an initial condition and the value is the initial value .    In more practical terms, a first-order ODE informs us of how this unknown function relates to its own derivative (rate of change) and time. The practical value of this idea is that we can often express or measure how a quantity changes more easily than find an expression for its value. Each ODE will have an entire parametrized family of functions as its set of solutions and the initial conditions indicate a data point in the -plane that the graph must pass through. This picks out a particular solution. We will see later that we may have many data points and parameters in the ODE which we can (approximately) solve for using optimization.  Here are three examples that may help make the idea of ODEs and IVPs make sense. We will develop these as Insights before the end of the section.  Linear Functions  The first initial value problem you probably ever encountered was most likely stated in the following form: find the equation of a line with slope passing through the point . Stated in terms of differential equations, this instruction is simply to solve the IVP The solution (check it), in slope-intercept form, is   Observe that in practical situations, and typically have some sort of units. The units of , and thus , are .   Exponential (Malthusian) Growth  The second common family of functions that naturally arises as the set of solutions to a family of differential equations are exponential functions. Here we will let our dependent variable be (for population, measured in individuals) and out independent variable be time, , in whatever units make sense for the problem.  The defining feature of a population that is growing exponentially is the following: the instantaneous growth rate in is proportional to , with some constant of proportionality . Assuming , finding the population as a function of time amounts to solving the IVP The solution to this IVP is given by   Observe that the units of are . Since has units of individuals, in order for the differential equation to be dimensinally consistent the units of must be . This is a commonly encountered unit for percent rates of change because percentages are by definition dimensionless.   A System of IVPs  Now we will introduce the idea of a system of differential equations. A system of ODEs (hence IVPs) involves multiple dependent variables whose rate of change depend on one-another. Such situations arise all the time. For instance, the variables could be competing animal species, interacting sub-populations during an epidemic (those who are susceptible, infected, and recovered), or the position and velocity of a mass on a spring.  A particularly simple example is given by   In this example we are using and as the dependent variables to describe the coordinates of a particle moving in the -plane. The values of and describe the particle's position, whereas the values of and decribe where it is moving (instantaneously). More specifically, let's think about the motion of the particle decriped by the differential equations when it is in each of the four quadrants of the plane.   If is in the first quadrant, and are both positive. Looking at the equations, we see that this means is negative and is positive. Thus, the particle is moving up and to the left.    If is in the second quadrant, is negative and is positive. Looking at the equations, we see that this means is negative and is also negative. Thus, the particle is moving down and to the left.    If is in the third quadrant, and are both negative. Looking at the equations, we see that this means is positive and is negative. Thus, the particle is moving down and to the right.    Finally, if is in the fourth quadrant, is positive and is negative. Looking at the equations, we see that this means is positive and positive. Thus, the particle is moving up and to the right.     The motion described above sounds like it might be circular (or at least periodic). Indeed, the solution to the given system of IVPs is and . As changes, the particle traces out the unit circle. Varying the initial conditions will change the starting point, which will change the radius if the starting point is not one unit from the origin.     Insights of IVPs  Now let's get to the heart of this text: Insightmaker and Insights. If you haven't already, you'll want to go to and create a free account. Also, if you were reading the three examples in the previous subsection and weren't feeling extra enlightened, the goal of this section is to help us see what's going on by visualizing ODEs in multiple ways.  Insight Insight Primitive  Insightmaker represents ODE (systems-dynamics) models (on pages called Insights ) using what are known as stock-flow models . Here we list the basic components of a stock-flow model, called primitives . Each component will be discussed in more depth separately.  Stocks: Stocks are things that accumulate. In the context of modeling with ODEs, these are the dependent variables of the system.  Flows: Flows into a stock contribute positively to the time-derivative of the corresponding dependent variable. Likewise, outflows contribute negatively. Briefly, the key formula to manage a stock-flow model is the following:   Variables: Variables are often used as parameters in the context of ODEs. These are numbers that we may modify to match our model to data, such as adjusting in in order to match a value of the population at a later time.  Links: Links are arrows between stocks, flows, and variables that allow the linked objects to be used in the formulas for the object that the to which the link points. Yes, that's a mouthful, but links are quite a useful organizational tool.     Now we can take each primitive individually and say   How it is created.    How it can be modified.    What its important settings are.   Following along through each primitive, you can create an Insight for .  Stocks     To create a stock, click on the \" PRIMITIVE\" button and choose to add a stock as shown. This will create a blue rectangular box with the name of your stock, which you can edit on the right side of the Insightmaker screen. Call this one .         When the stock you have created is highlighted, you will see this box on the left side of the Insightmaker screen. This is where you can set the initial value of the stock. This will be the value of the stock at the start of the simulation (the default start is at ). Here we have it set to the value . Perhaps the most important mathematical idea with stocks is the following: The expression you enter for the initial value is a single number, not something that varies with time; the time evolution of a stock is determined by the flows, which can depend on time.    When we discuss variables and links, we will let the initial value be a variable. Doing this makes sense in models where we think of the initial value as a parameter, such as in .    Now we will discuss the only two settings we use for stocks in an introductory Differential Equations course.    We will typically want \"Allow negatives\" to be on, i.e. the stock can take on negative values. Even in models where context might exclude negative values (such as when a stock is population), we would like to allow them anyway so that we can see something might be wrong with our model.    If you toggle on \"Enable value slider\", this will allow you to create a slider for the initial value of the stock. The ability to use sliders in simulations and see how the behavior of the model changes dynamically is one of the most useful features of Insightmaker. (In the Insight we're building, we will disable the value slider for this stock and create a variable for with a slider enabled.)       Variables     To create a variable, click on the \" PRIMITIVE\" button and choose to add a variable as shown. This will create a peach-colored ellipse with the name of your variable, which you can edit on the right side of the Insightmaker screen. Create two variables called and (drag so they're not on top of one another).         Similar to stocks, when a variable you have created is highlighted, you will see this box on the left side of the Insightmaker screen. This is where you can set the value of the variable. This will be the value of the variable through at the start of the simulation. Note that there is a lot of flexibility in what we may enter in the formula for a variable; it may be a function of time or depend on other variables. In the example we're exploring our variables will be the slope and -intercept of a linear function, which will be numbers controlled by sliders.   Links (discussed below) will allow our new variables to be used in formulas for other primitives.    The main setting we use for variables allows them to be dynamic parameters in simulations.    If you toggle on \"Enable value slider\", this will allow you to create a slider for the numerical value for the variable. When the slider is enabled and a numerical value is chosen, that variable will be constant through the simulation. You can choose a range of values and a step size for the slider that you find useful. Here we chose a range of with a step size of and set the slider to .       Links     To create a link, click on the \"Links\" button to highlight it. Now click on the stock or variable that you want to use in the formula for another primitive. Then you can drag the arrow to the primitive in question. In our example right now, we should link to the stock .         When the primitive you have linked to is highlighted you can now use that variable in its formula. Here we have the stock highlighted. Clicking in the formula box for the initial value, we can now add . Now the initial value is controlled by the variable .   .     Flows     To create a flow, click on the \"Flows\/Transitions\" button to highlight it. Now click on the stock which you want to be the source or target of your flow (if the flow really has no source, click on the target stock only). Then you can drag the arrow to the stock at the other end of the flow. If there is no stock at one end, you will have a cloud at one end of the flow. In our example we want a flow with a cloud as source and as its target.         When the flow is highlighted you will see this box on the left side of your screen. You may modify the formula for the flow in the current window, or you can click the circled box to have a new formula editing window. The formula may involve time (entered as Seconds(), Minutes(), etc.), the upstream and\/or downstream stocks, or any linked variables. In our example we should link to the flow into and make it the flow rate.           For flows we can choose to only allow positive flow rates by toggling \"positive flow rates only\" on. When this is on there will be no flow from the target to the source. This will make sense to do in some contexts but not others. In our running example, if we wish to allow for negative slopes, then we need to toggle this feature off.         When negative flow rates are allowed, we need to know which direction of the flow arrow positive rates represent. This is observed by one end of the the bidirectional flow arrow being hollow. Positive flow rates go from the primitive at hollow arrowhead to the primitive at the filled arrowhead.       Additionally, you may assign a minus sign ( ) and a plus sign ( ) to the ends of the arrows indicating positive and negative flow directions as this is somewhat easier to see than the default arrowhead types. To do this, right click on the flow and scroll down to see the \"line\" options and choose a minus on the start arrow and plus on the end arrow, as shown. You may choose this as the default for your insight by choosing to set this as the flow theme in the same menu.           If you have followed along building a linear function Insight as you have been reading, you should have an Insight like the following:   An Insight for a linear function (click on \"full screen Insight\" to open in a new window).     Now you can click \"simulate\" and we see the time evolution of with initial value and slope (you may need to use the configuration settings in the simulation window to only show ). If \"sliders linked\" is highlighted in the simulation window, then you can dynamically change the parameter values and see the effect on the graph of .   Linked sliders button in simulation window.     Note that when sliders are linked, you may want to configure your graphing window with a fixed minumum and maximum for the axes. Otherwise, the axes will change as the parameters are varied.      In the next section we will explore some more examples, including the remaining examples of ODEs in this section. As we do these we will explore some more of the available displays and settings in Insightmaker.  "
},
{
  "id": "Sec1_1_Insights_and_ODEs-2",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#Sec1_1_Insights_and_ODEs-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "In this section we will   Understand the components of an Insight in the framework of introductory differential equations.    Work through some familiar examples from algebra and Calculus and as Insights and see how they relate to the different representations of solutions to ODEs in Insightmaker,    "
},
{
  "id": "def-DE",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#def-DE",
  "type": "Definition",
  "number": "1.1.1",
  "title": "First-Order Ordinary Differential Equations.",
  "body": "First-Order Ordinary Differential Equations Differential Equation   Let denote time, which we will take as our independent variable throughout this text. A first-order ordinary differential equation (ODE) is an equation involving some unknown function of , (the dependent variable), its derivative , and possibly . If possible, we often write our first-order differential equations in the standard form where is some function of and . A solution to an ODE is some representation (not necessarily as a formula!) of a function that makes the equation true when substituted for .  An initial value problem (IVP) is an ODE together with some specified output value at a specified input value, expressed as , i.e. we are told that the graph of the unknown function passes through the point . The equation is called an initial condition and the value is the initial value .   "
},
{
  "id": "Linear_as_IVP",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#Linear_as_IVP",
  "type": "Example",
  "number": "1.1.2",
  "title": "Linear Functions.",
  "body": "Linear Functions  The first initial value problem you probably ever encountered was most likely stated in the following form: find the equation of a line with slope passing through the point . Stated in terms of differential equations, this instruction is simply to solve the IVP The solution (check it), in slope-intercept form, is   Observe that in practical situations, and typically have some sort of units. The units of , and thus , are .  "
},
{
  "id": "Exp_as_IVP",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#Exp_as_IVP",
  "type": "Example",
  "number": "1.1.3",
  "title": "Exponential (Malthusian) Growth.",
  "body": "Exponential (Malthusian) Growth  The second common family of functions that naturally arises as the set of solutions to a family of differential equations are exponential functions. Here we will let our dependent variable be (for population, measured in individuals) and out independent variable be time, , in whatever units make sense for the problem.  The defining feature of a population that is growing exponentially is the following: the instantaneous growth rate in is proportional to , with some constant of proportionality . Assuming , finding the population as a function of time amounts to solving the IVP The solution to this IVP is given by   Observe that the units of are . Since has units of individuals, in order for the differential equation to be dimensinally consistent the units of must be . This is a commonly encountered unit for percent rates of change because percentages are by definition dimensionless.  "
},
{
  "id": "Circle_as_System",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#Circle_as_System",
  "type": "Example",
  "number": "1.1.4",
  "title": "A System of IVPs.",
  "body": "A System of IVPs  Now we will introduce the idea of a system of differential equations. A system of ODEs (hence IVPs) involves multiple dependent variables whose rate of change depend on one-another. Such situations arise all the time. For instance, the variables could be competing animal species, interacting sub-populations during an epidemic (those who are susceptible, infected, and recovered), or the position and velocity of a mass on a spring.  A particularly simple example is given by   In this example we are using and as the dependent variables to describe the coordinates of a particle moving in the -plane. The values of and describe the particle's position, whereas the values of and decribe where it is moving (instantaneously). More specifically, let's think about the motion of the particle decriped by the differential equations when it is in each of the four quadrants of the plane.   If is in the first quadrant, and are both positive. Looking at the equations, we see that this means is negative and is positive. Thus, the particle is moving up and to the left.    If is in the second quadrant, is negative and is positive. Looking at the equations, we see that this means is negative and is also negative. Thus, the particle is moving down and to the left.    If is in the third quadrant, and are both negative. Looking at the equations, we see that this means is positive and is negative. Thus, the particle is moving down and to the right.    Finally, if is in the fourth quadrant, is positive and is negative. Looking at the equations, we see that this means is positive and positive. Thus, the particle is moving up and to the right.     The motion described above sounds like it might be circular (or at least periodic). Indeed, the solution to the given system of IVPs is and . As changes, the particle traces out the unit circle. Varying the initial conditions will change the starting point, which will change the radius if the starting point is not one unit from the origin.  "
},
{
  "id": "def-Insight",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#def-Insight",
  "type": "Definition",
  "number": "1.1.5",
  "title": "Insight.",
  "body": "Insight Insight Primitive  Insightmaker represents ODE (systems-dynamics) models (on pages called Insights ) using what are known as stock-flow models . Here we list the basic components of a stock-flow model, called primitives . Each component will be discussed in more depth separately.  Stocks: Stocks are things that accumulate. In the context of modeling with ODEs, these are the dependent variables of the system.  Flows: Flows into a stock contribute positively to the time-derivative of the corresponding dependent variable. Likewise, outflows contribute negatively. Briefly, the key formula to manage a stock-flow model is the following:   Variables: Variables are often used as parameters in the context of ODEs. These are numbers that we may modify to match our model to data, such as adjusting in in order to match a value of the population at a later time.  Links: Links are arrows between stocks, flows, and variables that allow the linked objects to be used in the formulas for the object that the to which the link points. Yes, that's a mouthful, but links are quite a useful organizational tool.    "
},
{
  "id": "Stocks",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#Stocks",
  "type": "Primitive Summary",
  "number": "1.1.6",
  "title": "Stocks.",
  "body": "Stocks     To create a stock, click on the \" PRIMITIVE\" button and choose to add a stock as shown. This will create a blue rectangular box with the name of your stock, which you can edit on the right side of the Insightmaker screen. Call this one .         When the stock you have created is highlighted, you will see this box on the left side of the Insightmaker screen. This is where you can set the initial value of the stock. This will be the value of the stock at the start of the simulation (the default start is at ). Here we have it set to the value . Perhaps the most important mathematical idea with stocks is the following: The expression you enter for the initial value is a single number, not something that varies with time; the time evolution of a stock is determined by the flows, which can depend on time.    When we discuss variables and links, we will let the initial value be a variable. Doing this makes sense in models where we think of the initial value as a parameter, such as in .    Now we will discuss the only two settings we use for stocks in an introductory Differential Equations course.    We will typically want \"Allow negatives\" to be on, i.e. the stock can take on negative values. Even in models where context might exclude negative values (such as when a stock is population), we would like to allow them anyway so that we can see something might be wrong with our model.    If you toggle on \"Enable value slider\", this will allow you to create a slider for the initial value of the stock. The ability to use sliders in simulations and see how the behavior of the model changes dynamically is one of the most useful features of Insightmaker. (In the Insight we're building, we will disable the value slider for this stock and create a variable for with a slider enabled.)      "
},
{
  "id": "Variables",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#Variables",
  "type": "Primitive Summary",
  "number": "1.1.7",
  "title": "Variables.",
  "body": "Variables     To create a variable, click on the \" PRIMITIVE\" button and choose to add a variable as shown. This will create a peach-colored ellipse with the name of your variable, which you can edit on the right side of the Insightmaker screen. Create two variables called and (drag so they're not on top of one another).         Similar to stocks, when a variable you have created is highlighted, you will see this box on the left side of the Insightmaker screen. This is where you can set the value of the variable. This will be the value of the variable through at the start of the simulation. Note that there is a lot of flexibility in what we may enter in the formula for a variable; it may be a function of time or depend on other variables. In the example we're exploring our variables will be the slope and -intercept of a linear function, which will be numbers controlled by sliders.   Links (discussed below) will allow our new variables to be used in formulas for other primitives.    The main setting we use for variables allows them to be dynamic parameters in simulations.    If you toggle on \"Enable value slider\", this will allow you to create a slider for the numerical value for the variable. When the slider is enabled and a numerical value is chosen, that variable will be constant through the simulation. You can choose a range of values and a step size for the slider that you find useful. Here we chose a range of with a step size of and set the slider to .      "
},
{
  "id": "Links",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#Links",
  "type": "Primitive Summary",
  "number": "1.1.8",
  "title": "Links.",
  "body": "Links     To create a link, click on the \"Links\" button to highlight it. Now click on the stock or variable that you want to use in the formula for another primitive. Then you can drag the arrow to the primitive in question. In our example right now, we should link to the stock .         When the primitive you have linked to is highlighted you can now use that variable in its formula. Here we have the stock highlighted. Clicking in the formula box for the initial value, we can now add . Now the initial value is controlled by the variable .   .    "
},
{
  "id": "Flows",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#Flows",
  "type": "Primitive Summary",
  "number": "1.1.9",
  "title": "Flows.",
  "body": "Flows     To create a flow, click on the \"Flows\/Transitions\" button to highlight it. Now click on the stock which you want to be the source or target of your flow (if the flow really has no source, click on the target stock only). Then you can drag the arrow to the stock at the other end of the flow. If there is no stock at one end, you will have a cloud at one end of the flow. In our example we want a flow with a cloud as source and as its target.         When the flow is highlighted you will see this box on the left side of your screen. You may modify the formula for the flow in the current window, or you can click the circled box to have a new formula editing window. The formula may involve time (entered as Seconds(), Minutes(), etc.), the upstream and\/or downstream stocks, or any linked variables. In our example we should link to the flow into and make it the flow rate.           For flows we can choose to only allow positive flow rates by toggling \"positive flow rates only\" on. When this is on there will be no flow from the target to the source. This will make sense to do in some contexts but not others. In our running example, if we wish to allow for negative slopes, then we need to toggle this feature off.         When negative flow rates are allowed, we need to know which direction of the flow arrow positive rates represent. This is observed by one end of the the bidirectional flow arrow being hollow. Positive flow rates go from the primitive at hollow arrowhead to the primitive at the filled arrowhead.       Additionally, you may assign a minus sign ( ) and a plus sign ( ) to the ends of the arrows indicating positive and negative flow directions as this is somewhat easier to see than the default arrowhead types. To do this, right click on the flow and scroll down to see the \"line\" options and choose a minus on the start arrow and plus on the end arrow, as shown. You may choose this as the default for your insight by choosing to set this as the flow theme in the same menu.          "
},
{
  "id": "linear-Insight",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#linear-Insight",
  "type": "Figure",
  "number": "1.1.10",
  "title": "",
  "body": " An Insight for a linear function (click on \"full screen Insight\" to open in a new window).   "
},
{
  "id": "Insights_of_IVPs-12",
  "level": "2",
  "url": "Sec1_1_Insights_and_ODEs.html#Insights_of_IVPs-12",
  "type": "Remark",
  "number": "1.1.11",
  "title": "",
  "body": " Note that when sliders are linked, you may want to configure your graphing window with a fixed minumum and maximum for the axes. Otherwise, the axes will change as the parameters are varied.  "
},
{
  "id": "Sec1_2_insightmaker_model_examples",
  "level": "1",
  "url": "Sec1_2_insightmaker_model_examples.html",
  "type": "Section",
  "number": "1.2",
  "title": "Some Examples",
  "body": " Some Examples     Explore both the ODEs from the last section and several modeling examples.    Discuss simulation and display settings in Insightmaker.     Malthusian (Exponential) Growth  Here we will consider the example given by , but add some context so that we can use more of the features of Insightmaker. Here is the set up for the problem: A population of creatures is initially and grows exponentially. If the population is after three weeks, what will the population be in one year?   Calculus Class Version  First we will give the standard formulation and solution using Calculus. The problem may be reformulated as the IVP where represents the number of creatures, the independent variable is time in weeks, and is the continuous percent growth rate in units of . We can then observe (by whatever technique you prefer) that the general solution is given by Using the data point , we find . Thus, creatures. However, this solution isn't the point of this text! We are only including it to reference the result.   Using Insightmaker  The Insight that we will use to solve this problem is below    Two features we will use in this solution are having sliders linked and using the tabular output option. To show the output of the simulation as a table instead of the graph of a function, use the configuration button in the simulation window and choose \"table\" as indicated in the image to the right.    Choosing the tabular output option.     Upon scrolling through the table with , we find . Thus, is too small.    Output at when .     Adjusting the slider for until we have , we see the correct value of is about . If we adjust the step size in the slider below , we can opbtain a more accurate value.    Output at when .      Now is a good time to discuss the simulation settings in Insightmaker. You get to these by clicking the \"Settings\" button in the top toolbar.   The first important settings are the Basic Simulation Settings . These include the following:    Simulation Start: This is the time value at the start of the simulation, which is the time value indicated by the initial value problem ( in ).     Simulation Length: This is how long the simulation will run. If you are interested in the value of a stock at some specific time after the start time, you may use the difference between the specified time and the start time as the simulation length.     Time Units: This is the unit of time. For example, if Seconds are chosen, then means second.      Basic Simulation Settings     Two more important settings are the Advanced Simulation Settings . These include the following:    Simulation Time Step: Insightmaker simulations use numerical methods to approximate values of stocks as functions of time. The outputs are only approximated at discrete time values starting with the simulation start time and moving in the positive direction in increments of this step size. A smaller time step updates the approximation more frequently and is thus more accurate. However, smaller time steps take more computations and hence run slower.      Basic Simulation Settings       Simulation Algorithm: The algorithms available for simulation with Insightmaker are Euler's Method and the 4th Order Runge-Kutta Method (RK4). Euler's Method uses the ODE to compute the slope at each point and follows a linear approximation to for one time step, then repeats. The RK4 Method is more complicated and its description is beyond the scope of this text.  The primary differences between the two is accuracy vs. speed. Euler's Method is what is known as a first order method, which means error decreases linearly with the step size. In other words, if you cut the time step in half, the error is Euler's Method will also be (approximately) cut in half. The RK4 Method is a 4th order method, so the error is approximately proportional to the step size to the 4th power, i.e. if you cut the time step in half, the error will be (approximately) multiplied by .    Exploration of Settings  In this example we will explore the simulation algorithm and step size settings in the context of the exponential growth model , but with initial value and . This yields , so we know that . Running the simulation using Euler's Method with a time step of , we obtain the following graph:   The solution given by Euler's Method with a time step of . The black points are added to show the discrete slopes between the outputs.     To explore how the error at changes with the step size, we will note that and use the tabular output.   When the time step is , the error at is .    Tabular output when the time step is using Euler's Method.      When the time step is , the error at is . This is about half of the previous error.    Tabular output when the time step is using Euler's Method.      When the time step is , the error at is . Again, this is about half of the previous error.    Tabular output when the time step is using Euler's Method.      Finally, when the time step is and we instead use the 4th Order Runge-Kutta algorithm, the error at is .    Tabular output when the time step is using RK4.      The Circular Functions as Solutions to a System  Here we will explore the system of ODEs introduced in to show the scatter plot (phase plane) display setting and revisit the choice of simulation algorithm. The Insight used here can be found at . Choosing the RK4 simulation algortithm with a step size of , we obtain the following time series graphs for and as functions of . In this we see a nice match for the exact analytic solutions and .   The solutions for and as time series for the system of differential IVPs given by .     In the case of systems of differential equations we are often interested more in the way the dependent variables vary with each other as much as (or more than) how they vary individually with time. So see this we use the scatter plot configuration in the simulation window's configuration settings. We choose \"show lines\" and turn off \"show points\" to display the following:   The solutions for and plotted together for the system of differential IVPs given by .     Finally, to again illustrate the accuracy difference between Euler's Method and RK4, we show the result of the same simulation using Euler's Method:   The solutions for and plotted together for the system of differential IVPs given by using Euler's Method.     We see the outward spiral because Euler's Method repeatedly follows lines tangent to the circle, which moves us further and further from the origin.   In the next example we consider the time it takes for an ant to build a tunnel of length . This scenario is presented in as well as Project 1.6.3 in . The approach presented here is specific to Insightmaker and is meant to help us understand how to build models of the real world; our examples so far have been more of an abstract mathematical nature.  Ant Tunneling  Suppose that we have a mound of dirt of unknown size and we wish to tunnel through this mound. We will make the choice of a single stock, , the volume of dirt removed from the mound in cubic centimeters. This will also be a good proxy for the length of the tunnel. The initial value for should be .  Now we will build our variables. There are certainly many ways to proceed and what follows is just one:   Let be the radius of the tunnel (assuming its shape is cylindrical and straight) in cm.    Let be the length of the tunnel, in cm, at time of seconds. This is computable as .    Let be the rate in that we can remove (scrape) dirt from the end of the tunnel.    The main issue that makes the flow rate of depend on is that dirt scraped from the end of the tunnel must then be removed from the tunnel. We will assume that the velocity at which a volume of dirt can be moved is inversely proportional to . That is for some constant . (Think about how plausible this is.)     Now we can create links and flows.   We should have one flow into . Clearly, and should be linked to this flow. Since the flow rate will depend on the length of the tunnel, we should also have a link from to this flow.    Because is computed from and , there should be links pointing from and to .   At this point we have the following diagram:  The diagram of dependencies for the ant tunneling problem.     Now we can derive the formula for the flow rate into . Observe that for a small change in volume, , the time it takes to remove that volume is given by A little algebra and taking the limit as then yields We would enter this into the formula for the flow as 1\/(1\/[k_scrape]+[x]\/([k_move])) . Observe that for finding the analytic solution to this ODE, we would write it as   Finally, we can add one more item so that we can graph the solution to the problem posed in the original SIMIODE scenario. That is, we wish to graph the time to tunnel cm as a function of . So far we have as a function of time. To do this we create time as a stock, with initial value zero, and flow rate . Now running the simulation in scatter plot format with the new time stock on the vertical axis and on the horizontal gives us the desired graph. A complete Insight is given below (with several variables set arbitrarily at one).      Based on the results of the above simulation, is it better to have one ant dig the entire tunnel or have two ants start at opposite ends and meet in the middle?   The Insightmaker model construction in may seem to be built in a somewhat ad hoc way. In and we will try to make model building more systematic. However, keep in mind that modeling is a creative endeavor; there isn't an easy \"build a model\" algorithm.   "
},
{
  "id": "Sec1_2_insightmaker_model_examples-2",
  "level": "2",
  "url": "Sec1_2_insightmaker_model_examples.html#Sec1_2_insightmaker_model_examples-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "   Explore both the ODEs from the last section and several modeling examples.    Discuss simulation and display settings in Insightmaker.    "
},
{
  "id": "Exp_Insight_Example",
  "level": "2",
  "url": "Sec1_2_insightmaker_model_examples.html#Exp_Insight_Example",
  "type": "Example",
  "number": "1.2.1",
  "title": "Malthusian (Exponential) Growth.",
  "body": "Malthusian (Exponential) Growth  Here we will consider the example given by , but add some context so that we can use more of the features of Insightmaker. Here is the set up for the problem: A population of creatures is initially and grows exponentially. If the population is after three weeks, what will the population be in one year?   Calculus Class Version  First we will give the standard formulation and solution using Calculus. The problem may be reformulated as the IVP where represents the number of creatures, the independent variable is time in weeks, and is the continuous percent growth rate in units of . We can then observe (by whatever technique you prefer) that the general solution is given by Using the data point , we find . Thus, creatures. However, this solution isn't the point of this text! We are only including it to reference the result.   Using Insightmaker  The Insight that we will use to solve this problem is below    Two features we will use in this solution are having sliders linked and using the tabular output option. To show the output of the simulation as a table instead of the graph of a function, use the configuration button in the simulation window and choose \"table\" as indicated in the image to the right.    Choosing the tabular output option.     Upon scrolling through the table with , we find . Thus, is too small.    Output at when .     Adjusting the slider for until we have , we see the correct value of is about . If we adjust the step size in the slider below , we can opbtain a more accurate value.    Output at when .     "
},
{
  "id": "Sec1_2_insightmaker_model_examples-5-1",
  "level": "2",
  "url": "Sec1_2_insightmaker_model_examples.html#Sec1_2_insightmaker_model_examples-5-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simulation Start: Simulation Length: Time Units: "
},
{
  "id": "Sec1_2_insightmaker_model_examples-6-1",
  "level": "2",
  "url": "Sec1_2_insightmaker_model_examples.html#Sec1_2_insightmaker_model_examples-6-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simulation Time Step: "
},
{
  "id": "Sec1_2_insightmaker_model_examples-7-1-1",
  "level": "2",
  "url": "Sec1_2_insightmaker_model_examples.html#Sec1_2_insightmaker_model_examples-7-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Simulation Algorithm: "
},
{
  "id": "Settings_Exploration",
  "level": "2",
  "url": "Sec1_2_insightmaker_model_examples.html#Settings_Exploration",
  "type": "Example",
  "number": "1.2.2",
  "title": "Exploration of Settings.",
  "body": "Exploration of Settings  In this example we will explore the simulation algorithm and step size settings in the context of the exponential growth model , but with initial value and . This yields , so we know that . Running the simulation using Euler's Method with a time step of , we obtain the following graph:   The solution given by Euler's Method with a time step of . The black points are added to show the discrete slopes between the outputs.     To explore how the error at changes with the step size, we will note that and use the tabular output.   When the time step is , the error at is .    Tabular output when the time step is using Euler's Method.      When the time step is , the error at is . This is about half of the previous error.    Tabular output when the time step is using Euler's Method.      When the time step is , the error at is . Again, this is about half of the previous error.    Tabular output when the time step is using Euler's Method.      Finally, when the time step is and we instead use the 4th Order Runge-Kutta algorithm, the error at is .    Tabular output when the time step is using RK4.     "
},
{
  "id": "Circle_as_System_Insight_Example",
  "level": "2",
  "url": "Sec1_2_insightmaker_model_examples.html#Circle_as_System_Insight_Example",
  "type": "Example",
  "number": "1.2.4",
  "title": "The Circular Functions as Solutions to a System.",
  "body": "The Circular Functions as Solutions to a System  Here we will explore the system of ODEs introduced in to show the scatter plot (phase plane) display setting and revisit the choice of simulation algorithm. The Insight used here can be found at . Choosing the RK4 simulation algortithm with a step size of , we obtain the following time series graphs for and as functions of . In this we see a nice match for the exact analytic solutions and .   The solutions for and as time series for the system of differential IVPs given by .     In the case of systems of differential equations we are often interested more in the way the dependent variables vary with each other as much as (or more than) how they vary individually with time. So see this we use the scatter plot configuration in the simulation window's configuration settings. We choose \"show lines\" and turn off \"show points\" to display the following:   The solutions for and plotted together for the system of differential IVPs given by .     Finally, to again illustrate the accuracy difference between Euler's Method and RK4, we show the result of the same simulation using Euler's Method:   The solutions for and plotted together for the system of differential IVPs given by using Euler's Method.     We see the outward spiral because Euler's Method repeatedly follows lines tangent to the circle, which moves us further and further from the origin.  "
},
{
  "id": "Ant_Tunneling",
  "level": "2",
  "url": "Sec1_2_insightmaker_model_examples.html#Ant_Tunneling",
  "type": "Example",
  "number": "1.2.8",
  "title": "Ant Tunneling.",
  "body": "Ant Tunneling  Suppose that we have a mound of dirt of unknown size and we wish to tunnel through this mound. We will make the choice of a single stock, , the volume of dirt removed from the mound in cubic centimeters. This will also be a good proxy for the length of the tunnel. The initial value for should be .  Now we will build our variables. There are certainly many ways to proceed and what follows is just one:   Let be the radius of the tunnel (assuming its shape is cylindrical and straight) in cm.    Let be the length of the tunnel, in cm, at time of seconds. This is computable as .    Let be the rate in that we can remove (scrape) dirt from the end of the tunnel.    The main issue that makes the flow rate of depend on is that dirt scraped from the end of the tunnel must then be removed from the tunnel. We will assume that the velocity at which a volume of dirt can be moved is inversely proportional to . That is for some constant . (Think about how plausible this is.)     Now we can create links and flows.   We should have one flow into . Clearly, and should be linked to this flow. Since the flow rate will depend on the length of the tunnel, we should also have a link from to this flow.    Because is computed from and , there should be links pointing from and to .   At this point we have the following diagram:  The diagram of dependencies for the ant tunneling problem.     Now we can derive the formula for the flow rate into . Observe that for a small change in volume, , the time it takes to remove that volume is given by A little algebra and taking the limit as then yields We would enter this into the formula for the flow as 1\/(1\/[k_scrape]+[x]\/([k_move])) . Observe that for finding the analytic solution to this ODE, we would write it as   Finally, we can add one more item so that we can graph the solution to the problem posed in the original SIMIODE scenario. That is, we wish to graph the time to tunnel cm as a function of . So far we have as a function of time. To do this we create time as a stock, with initial value zero, and flow rate . Now running the simulation in scatter plot format with the new time stock on the vertical axis and on the horizontal gives us the desired graph. A complete Insight is given below (with several variables set arbitrarily at one).     "
},
{
  "id": "Sec1_2_insightmaker_model_examples-12",
  "level": "2",
  "url": "Sec1_2_insightmaker_model_examples.html#Sec1_2_insightmaker_model_examples-12",
  "type": "Checkpoint",
  "number": "1.2.10",
  "title": "",
  "body": "Based on the results of the above simulation, is it better to have one ant dig the entire tunnel or have two ants start at opposite ends and meet in the middle? "
},
{
  "id": "Sec1_2_insightmaker_model_examples-13",
  "level": "2",
  "url": "Sec1_2_insightmaker_model_examples.html#Sec1_2_insightmaker_model_examples-13",
  "type": "Remark",
  "number": "1.2.11",
  "title": "",
  "body": " The Insightmaker model construction in may seem to be built in a somewhat ad hoc way. In and we will try to make model building more systematic. However, keep in mind that modeling is a creative endeavor; there isn't an easy \"build a model\" algorithm.  "
},
{
  "id": "Intro_dimensional_analysis",
  "level": "1",
  "url": "Intro_dimensional_analysis.html",
  "type": "Section",
  "number": "1.3",
  "title": "Dimensional Analysis in ODEs and Insights",
  "body": " Dimensional Analysis in ODEs and Insights   In this section we will    discuss how dimensional analysis and units can help build and interpret ODE models and    explore units and model validation in Insightmaker.       Dimension refers to the fundamental type of quantity we work with. Quantities may have dimension of length, area, volume, mass, time, etc. Units refer to a specific way of quantifying a dimensional quantity such as inches or feet for a quantity whose dimension is length. To specify units of a primitive in Insightmaker, observe that each stock, flow, or variable in Insightmaker comes with the button shown to the right in its menu.     The Choose Units button.     When we click the Choose Units button we see this menu:  The units menu for a stock, flow, or variable. Each drop down is a basic dimension , which you can then choose units from.      The difference between dimension and units is visible in this menu; each drop down is a basic dimension while the choices are units.  Both dimension and units play by the same basic rules in ODE modeling. The important ones are as follows:   Quantities can only be added or subtracted if they have the same dimension. To add two quantities of the same dimension with different units, you generally need to convert one of them. Insightmaker does some common conversions automatically (see ).    Dimensions and units can be combined via multiplication and division. For instance, velocity has dimension of distance\/time and velocity time has dimension of distance. Often multiplication by variables in flow rates indicates the units of the variable for this reason.    If is a function of time, then the units of are . For the purposes of Insightmaker, this means that if units are assigned to a stock, the units of each flow into or out of that stock must be the units of the stock per time unit.    Likewise, the units of are . Thus, if units are assigned to a flow you must assign units to its source or target stock accordingly.     Insightmaker Automatic Unit Conversions In the Insight below we see that Insightmaker will automatically convert units of the same dimension, thus simplifying flow formulas. In this example has units of feet, time has units of seconds, and has units of inches per second. Setting the flow rate into to equal , the units are correctly converted; when is inches per second the slope of the simulated line is foot per second.  An Insight for a linear function (with zero intercept) including units with the slope units converted automatically.     When building Insights you can always leave quantities unitless. In the example below we illustrate why it is a good practice to use units and how Insightmaker keeps you honest when you do.  The Spread of a Rumor  For this model we will consider a population, with a fixed size of , in which a rumor spreads. We will have two sub-populations of size (for Heard ) and (for Not heard ). Time will be measured in days and we will assume and . A common model for the rate of change in is given by where is some constant. The typical reasoning presented is that this model presents a scenario where if you scale up either sub-population, the rate of change in scales up by the same amount. Since is constant, we have .  We build this model in Insightmaker (working version found ) as follows:   Set the simulation settings to RK4 with a time step and Days as time units.    Create two stocks, and , with initial values and , respectively. Assign units of Individuals from the Ecology and Nature menu for units.    Create a variable , which we will leave unitless for now. Give it a slider range from to (somewhat arbitrarily).    Create a single flow from to . This is possible because and have the same units and . After linking to this flow, we can assign the flow formula [k]*[H]*[N] . Since the stocks have units of Individuals, we must assign the units of this flow as Individuals\/Days.   Now we run the simulation and obtain the following error:  An error message for wrong units on the flow.    The reason for this error message is that we left dimensionless. Observing that is in units of Individuals\/Days and is in units of Individuals , it must be the case that has units of 1\/(Individuals*Days). Making this assignment and letting (see below why this might be the right order of magnitude for ), we obtain the following simulation:  Graph of and when .    From this graph we see that essentially everyone has hear the rumor in two days.  Now let's examine the units of to better understand this model, which could theoretically help us improve it. We ask ourselves \"What is the meaning of ?\" We note the units of are Knowing that 1\/time units are percent rates of change, we observe that has units of a percent growth rate in .  Why would we multiply by and have a variable percent growth rate? Let's dive deeper as follows:   Let be the percentage of the population that a typical individual encounters in a day.  Let be the probability that individual passes the rumor along.   Now we see that for each individual, individuals who have not heard the rumor will hear it. We then multiply by to get the total number of individuals entering the population per day. Thus, . The choice of above was assuming and .  While the deeper analysis of the model given here may not seem especially obvious, practicing with units makes it much easier.   What about the rumor spread model seems realistic or unrealistic to you? Can you think of ways to improve it?  "
},
{
  "id": "Intro_dimensional_analysis-2",
  "level": "2",
  "url": "Intro_dimensional_analysis.html#Intro_dimensional_analysis-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": " In this section we will    discuss how dimensional analysis and units can help build and interpret ODE models and    explore units and model validation in Insightmaker.    "
},
{
  "id": "Intro_dimensional_analysis-3-1",
  "level": "2",
  "url": "Intro_dimensional_analysis.html#Intro_dimensional_analysis-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Dimension Units "
},
{
  "id": "units_menu",
  "level": "2",
  "url": "Intro_dimensional_analysis.html#units_menu",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " The units menu for a stock, flow, or variable. Each drop down is a basic dimension , which you can then choose units from.    "
},
{
  "id": "auto_unit_convert",
  "level": "2",
  "url": "Intro_dimensional_analysis.html#auto_unit_convert",
  "type": "Example",
  "number": "1.3.2",
  "title": "Insightmaker Automatic Unit Conversions.",
  "body": "Insightmaker Automatic Unit Conversions In the Insight below we see that Insightmaker will automatically convert units of the same dimension, thus simplifying flow formulas. In this example has units of feet, time has units of seconds, and has units of inches per second. Setting the flow rate into to equal , the units are correctly converted; when is inches per second the slope of the simulated line is foot per second.  An Insight for a linear function (with zero intercept) including units with the slope units converted automatically.    "
},
{
  "id": "rumor_spread",
  "level": "2",
  "url": "Intro_dimensional_analysis.html#rumor_spread",
  "type": "Example",
  "number": "1.3.4",
  "title": "The Spread of a Rumor.",
  "body": "The Spread of a Rumor  For this model we will consider a population, with a fixed size of , in which a rumor spreads. We will have two sub-populations of size (for Heard ) and (for Not heard ). Time will be measured in days and we will assume and . A common model for the rate of change in is given by where is some constant. The typical reasoning presented is that this model presents a scenario where if you scale up either sub-population, the rate of change in scales up by the same amount. Since is constant, we have .  We build this model in Insightmaker (working version found ) as follows:   Set the simulation settings to RK4 with a time step and Days as time units.    Create two stocks, and , with initial values and , respectively. Assign units of Individuals from the Ecology and Nature menu for units.    Create a variable , which we will leave unitless for now. Give it a slider range from to (somewhat arbitrarily).    Create a single flow from to . This is possible because and have the same units and . After linking to this flow, we can assign the flow formula [k]*[H]*[N] . Since the stocks have units of Individuals, we must assign the units of this flow as Individuals\/Days.   Now we run the simulation and obtain the following error:  An error message for wrong units on the flow.    The reason for this error message is that we left dimensionless. Observing that is in units of Individuals\/Days and is in units of Individuals , it must be the case that has units of 1\/(Individuals*Days). Making this assignment and letting (see below why this might be the right order of magnitude for ), we obtain the following simulation:  Graph of and when .    From this graph we see that essentially everyone has hear the rumor in two days.  Now let's examine the units of to better understand this model, which could theoretically help us improve it. We ask ourselves \"What is the meaning of ?\" We note the units of are Knowing that 1\/time units are percent rates of change, we observe that has units of a percent growth rate in .  Why would we multiply by and have a variable percent growth rate? Let's dive deeper as follows:   Let be the percentage of the population that a typical individual encounters in a day.  Let be the probability that individual passes the rumor along.   Now we see that for each individual, individuals who have not heard the rumor will hear it. We then multiply by to get the total number of individuals entering the population per day. Thus, . The choice of above was assuming and .  While the deeper analysis of the model given here may not seem especially obvious, practicing with units makes it much easier.  "
},
{
  "id": "Intro_dimensional_analysis-10",
  "level": "2",
  "url": "Intro_dimensional_analysis.html#Intro_dimensional_analysis-10",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "",
  "body": "What about the rumor spread model seems realistic or unrealistic to you? Can you think of ways to improve it? "
},
{
  "id": "SprintModel",
  "level": "1",
  "url": "SprintModel.html",
  "type": "Section",
  "number": "2.1",
  "title": "Modeling a Sprint with Insightmaker",
  "body": " Modeling a Sprint with Insightmaker     Create a one-parameter ODE model of the velocity and position of a sprinter.    Compare the results of our model to real-world data from the 2008 Olympic 100m dash.    Estimate the value of the parameter in our ODE model that yields the best fit to the data using the built-in optimization abilities of Insightmaker.      In this section we will follow the example given in the first section and to show the full workflow of modeling a real-world scenario with Insightmaker. You are encouraged to build your own Insights as you work through this section. However, if you get stuck, links to three Insights are provided at the end of this section. Each one illustrates a different approach to parameter estimation.  We consider the problem of creating an ODE model for the velocity of a sprinter based on the following data from the 2008 Olympic 100m dash:  Usain Bolt's Position Data from the 2008 Olympic 100m Dash    Time (s)  0.165  1.85  2.87  3.78  4.65  5.50  6.32  7.14  7.96  8.79  9.69    Position (m)  0  10  20  30  40  50  60  70  80  90  100     Observe that the data we are presented with is position, while we are attemting to model velocity. This turns out to be a common situation as velocity is easier to model with a differential equation using Newton's Second Law ( has the derivative of velocity on the right-hand side), whereas position is easier to measure for data collection. However, since we can numerically integrate using Insightmaker we just need to create a model for velocity, then make the velocity stock equal to the inflow rate of the position stock via a link. This idea is illustrated with the following basic diagram, which we may refer to as an idiom since it describes a very common modeling situation (this is the velocity-to-position idiom).   The basic velocity to position diagram.    Creating this basic diagram for the modeling scenario, while it may seem intuitive, is the first step in the process of modeling using Insightmaker. We will now carry out the rest of the modeling process explicitly.   Creating the Model Diagram  Step 1: Identify Stocks and Flow Relationships   Identify all time-dependent variables (stocks) in the scenario and observe possible inflows, outflow, and flows between stocks. Decide if any stock influences the flow into or out of another and create links accordingly.    It is also good practice to establish units on all the stocks and flows of the model at this stage. In this case we will establish meters as the units of position, m\/s as the units of velocity (the stock and the flow into position) and m\/s as the units of both flows into velocity.   Establish Settings and Create Formulas  Step 2: Establish Flow Formulas and Parameters   Create formulas for the flow rates as well as any parameters (variables in Insightmaker) that the flow rates may depend on.    For the model of a sprint we will follow the Hill-Keller model as in . In this model we have one term for propulsive force, , which is assumed to be proportional to the mass of the sprinter. Thus, Here will be in units of m\/s and will be in units of kilograms. We will see that only one of them ( ) must be added as a variable in the model.   How realistic does it seem that the propulsive force generated by a sprinter is    proportional to their mass and    constant with respect to time?     There is also a resistive force, , that is assumed to be proportional to the velocity and the mass of the sprinter. This assumption is based on the idea that this resistive force accounts for air resistance and internal resistance of the runner's body. Thus, Here has units of s. We will add as a variable to our insight.  Using Newton's Second Law, we have Dividing everything by , we now have formulas for our flows for the velocity position stocks:  Flow Formulas for Sprint Model    Flow Formula into\/out of what    acceleration terms P into velocity    deceleration terms kv out of velocity    velocity v into position      Our Insight so far should look like the figure below with the flows describe above.   The basic Hill-Keller Insight.    Simulation settings will be as follows:  Simulation Start:   . This is the first time value in our data. It isn't zero because reaction time was nonzero.   Simulation End:   . This is the difference between and    Time Units:  Seconds   Simulation Time Step:   . This is a very small time step, but it is (sort of) necessary because of the initial point and wanting to be an exact time step. (We could use a larger time step by investigating factors of .)   Simulation Algorithm:  Euler's Method. Since the time step is very small, Euler's Method will be accurate enough.     At this point we have the Insight. Following , we will let and make have a slider to adjust it in small steps (of size ) between and (arrived at by running the model to see what works).   Using Data  Step 3: Adjust Parameters to Match the Data   After creating some quantifiable way of measuring how well the simulation matches the data, import the data as a converter and use an optimization procedure to make the simulation match the data as well as possible.    In order of increasing complexity we can   adjust sliders to make the data match at one or more points by inspection,    use the built-in optimization algorithm in Insightmaker to minimize the absolute value of the difference between one data point and the simulation, or    use the built-in optimization algorithm in Insightmaker to minimize the sum of squared errors between the collection of data points and the simulation.     We will now demonstrate each of these for our sprint model and see how much variation we get in our value of depending on the method.     Adjust Paramteters with Sliders: This is the most intuitive method. In this case, Bolt ran meters in seconds. Thus, we can run the simulation set to display time and position in the table display. Then, with sliders linked, we can adjust to make the position as close as we can to as possible when . The result is shown below:     The slider of for yields a position very close to meters.      Use the Optimizer (Version 1): As an alternative to using a slider, we can use the built in optimization algorithm to minimize when . First, we create a variable for (it will need a link from position). Then we proceed as follows:   Choose \"Optimization and Goal Seeking\" from the \"Tools\" (toolbox next to the \"Simulate\" button).    Choose as the \"primitive to adjust\".    Highlight \"minimize\" and \"final value\".    Choose as the primitive and accuracy of along with a guess range for .   Running the optimization, we find the is about what we found using the slider method. Notice we get a range of values and the value of the minimized variable. This is a numerical optimization algorithm, hence may not arrive at exact values even if you can find them by hand. The output is shown below.     The optimizer finds .      Use the Optimizer (Version 2): Minimizing the difference between and the model's predictied position at does not account for any other time-position pairs. To obtain a more global fit to the data, we will use a converter with the entire dataset. Then we will minimize the sum of squared errors from the data to the model outputs.    To proceed, click to add a primitive and choose \"Add Converter\". Call your converter \"data\".     From here, insert the time and position values from with time as input source, meters as units, and linear interpolation. (Linear interpolation builds additional data points for comparison to the simulation by drawing straight lines through the data points.)  Now create a new variable called (for \"squared error\") that has as its formula and m as units.  Now open the optimization menu and choose to adjust to minimize the integral of . (The integral will be the sum of the squared errors.)  Running the optimization, we find that this method gives .     The optimizer now finds with the sum (integral) of the squared errors equal to .      Create a new stock whose flow rate is (dividing by will make this into a sum rather than an integral, which is what the optimizer does, really). Use this to compare the (sum of squared errors) for and to verify that the latter gives a better global fit to the data.     Sprint Insights  For comparison to your Insights, see below:    Insight only adjusting slider to match data.      Insight using the optimizer to match position when .      Insight using the optimizer to minimize the sum of the squared errors.       "
},
{
  "id": "SprintModel-2",
  "level": "2",
  "url": "SprintModel.html#SprintModel-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "   Create a one-parameter ODE model of the velocity and position of a sprinter.    Compare the results of our model to real-world data from the 2008 Olympic 100m dash.    Estimate the value of the parameter in our ODE model that yields the best fit to the data using the built-in optimization abilities of Insightmaker.    "
},
{
  "id": "sprint_data",
  "level": "2",
  "url": "SprintModel.html#sprint_data",
  "type": "Table",
  "number": "2.1.1",
  "title": "Usain Bolt’s Position Data from the 2008 Olympic 100m Dash",
  "body": "Usain Bolt's Position Data from the 2008 Olympic 100m Dash    Time (s)  0.165  1.85  2.87  3.78  4.65  5.50  6.32  7.14  7.96  8.79  9.69    Position (m)  0  10  20  30  40  50  60  70  80  90  100    "
},
{
  "id": "SprintModel-3-4",
  "level": "2",
  "url": "SprintModel.html#SprintModel-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "idiom "
},
{
  "id": "velocity_to_position",
  "level": "2",
  "url": "SprintModel.html#velocity_to_position",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": " The basic velocity to position diagram.   "
},
{
  "id": "modeling-step-one",
  "level": "2",
  "url": "SprintModel.html#modeling-step-one",
  "type": "Modeling Step",
  "number": "2.1.3",
  "title": "Step 1: Identify Stocks and Flow Relationships.",
  "body": "Step 1: Identify Stocks and Flow Relationships   Identify all time-dependent variables (stocks) in the scenario and observe possible inflows, outflow, and flows between stocks. Decide if any stock influences the flow into or out of another and create links accordingly.   "
},
{
  "id": "modeling-step-two",
  "level": "2",
  "url": "SprintModel.html#modeling-step-two",
  "type": "Modeling Step",
  "number": "2.1.4",
  "title": "Step 2: Establish Flow Formulas and Parameters.",
  "body": "Step 2: Establish Flow Formulas and Parameters   Create formulas for the flow rates as well as any parameters (variables in Insightmaker) that the flow rates may depend on.   "
},
{
  "id": "SprintModel-5-4",
  "level": "2",
  "url": "SprintModel.html#SprintModel-5-4",
  "type": "Checkpoint",
  "number": "2.1.5",
  "title": "",
  "body": " How realistic does it seem that the propulsive force generated by a sprinter is    proportional to their mass and    constant with respect to time?    "
},
{
  "id": "SprintModel-5-6-3",
  "level": "2",
  "url": "SprintModel.html#SprintModel-5-6-3",
  "type": "Table",
  "number": "2.1.6",
  "title": "Flow Formulas for Sprint Model",
  "body": " Flow Formulas for Sprint Model    Flow Formula into\/out of what    acceleration terms P into velocity    deceleration terms kv out of velocity    velocity v into position    "
},
{
  "id": "sprint_model_1",
  "level": "2",
  "url": "SprintModel.html#sprint_model_1",
  "type": "Figure",
  "number": "2.1.7",
  "title": "",
  "body": " The basic Hill-Keller Insight.   "
},
{
  "id": "modeling-step-three",
  "level": "2",
  "url": "SprintModel.html#modeling-step-three",
  "type": "Modeling Step",
  "number": "2.1.8",
  "title": "Step 3: Adjust Parameters to Match the Data.",
  "body": "Step 3: Adjust Parameters to Match the Data   After creating some quantifiable way of measuring how well the simulation matches the data, import the data as a converter and use an optimization procedure to make the simulation match the data as well as possible.   "
},
{
  "id": "SprintModel-6-5-1-1",
  "level": "2",
  "url": "SprintModel.html#SprintModel-6-5-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Adjust Paramteters with Sliders: "
},
{
  "id": "sprint_slider_pic",
  "level": "2",
  "url": "SprintModel.html#sprint_slider_pic",
  "type": "Figure",
  "number": "2.1.9",
  "title": "",
  "body": "   The slider of for yields a position very close to meters.  "
},
{
  "id": "SprintModel-6-5-2-1",
  "level": "2",
  "url": "SprintModel.html#SprintModel-6-5-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Use the Optimizer (Version 1): "
},
{
  "id": "sprint_end_opt_pic",
  "level": "2",
  "url": "SprintModel.html#sprint_end_opt_pic",
  "type": "Figure",
  "number": "2.1.10",
  "title": "",
  "body": "   The optimizer finds .  "
},
{
  "id": "SprintModel-6-5-3-1",
  "level": "2",
  "url": "SprintModel.html#SprintModel-6-5-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Use the Optimizer (Version 2): "
},
{
  "id": "sprint_sse_opt_pic",
  "level": "2",
  "url": "SprintModel.html#sprint_sse_opt_pic",
  "type": "Figure",
  "number": "2.1.11",
  "title": "",
  "body": "   The optimizer now finds with the sum (integral) of the squared errors equal to .  "
},
{
  "id": "SprintModel-6-6",
  "level": "2",
  "url": "SprintModel.html#SprintModel-6-6",
  "type": "Checkpoint",
  "number": "2.1.12",
  "title": "",
  "body": " Create a new stock whose flow rate is (dividing by will make this into a sum rather than an integral, which is what the optimizer does, really). Use this to compare the (sum of squared errors) for and to verify that the latter gives a better global fit to the data.  "
},
{
  "id": "FastPitchWorksheet",
  "level": "1",
  "url": "FastPitchWorksheet.html",
  "type": "Worksheet",
  "number": "2.2",
  "title": "Fastest Pitch?",
  "body": " Fastest Pitch?     Here we will use an ODE model to determine whether a 100.9 mph pitch recorded in 1974 was in fact a faster fastball than the \"fastest pitch ever\", which was a 105.1 mph pitch in 2010.     This worksheet follows the basic outline of , but here we rely on the numerical solving power of Insightmaker to solve the ODE and its optimization algorithm to estimate the drag coefficient. The reason this is interesting is that the measurement of pitch velocities in Major League Baseball (MLB) has varied over the years. In 1974, Nolan Ryan had a fastball clocked by radar moving 100.9 mph at a distance of 10 ft from home plate. On the other hand, Aroldis Chapman had a fastball clocked at 105.1 mph at a distance of 50.5 ft from home plate. Because the ball slows down as it moves toward home plate, we would like to know which one was moving faster at equal distances from home plate.   Define variables as follows: Assume that the force acting to slow down a baseball in flight is given by    Use dimensional analysis to explain why the exponent must equal .    Explain why it makes sense to have the minus sign in front of .      Attach units to all the terms on both sides of the given equation and observe that time units only appear in one place on the right-hand side.   From now on, we may represent the ODE given in as where . At the time of publication of , no data to calculate the value of was available from MLB. Thus, we need to estimate it from data.  The data set we will use to estimate is given in the table below, sourced from the makers of a Bluetooth enabled pitch training ball ( ). The terminology used in the given table is defined as follows:    Time to Plate: This is the time it takes from the pitcher's initial movement until the ball gets to home plate, which is 60.5 feet from the pitcher's mound.     Delivery Time: This is the time from the pitcher's initial movement until the ball is released.     Extension: This is how far in front of the pitcher's mound the ball is released.      Baseball Velocity Data    Velocity (mph) Time to Plate (s) Delivery Time (s) Extension (ft)    85 1.2 0.74 5.1    83.7 1.3 0.84 6.2    79.3 1.25 0.79 4.1    83.6 1.4 0.95 4.8    82.3 1.21 0.75 5.7    85.7 1.26 0.81 5.0    81.7 1.17 0.71 5.9    86.7 1.24 0.79 4.5    77.7 1.23 0.72 5.7    72.7 1.25 0.74 3.2    77.3 1.37 0.86 5.8    76.9 1.25 0.74 5.8    73 1.22 0.69 4.4    77.1 1.24 0.78 6       Now we will use Insightmaker and the table data.    Construct an Insight for the ODE model presented above using as a variable and and its integral (position) as stocks. Be sure to carefully include all units (paying careful attention to them).    Using either slider functionality or Insightmaker's optimization algorithm, construct an estimate of for each row of . Be sure to carefully document the procedure you use for your estimates as they might vary. Note: Some of the rows of are bad data; your estimates of should find them so that you can throw them out.      Aroldis Chapman's fastest recorded pitch was a 105.1 mph fastball on September 24, 2010, and its velocity was measured 50.5 ft from home plate. Nolan Ryan threw a pitch whose velocity was measured at 100.9 mph at a distance of 10 ft from home plate. Use your Insight and estimate(s) of to decide which of these two pitches was likely the fastest.    Now (2024 as of writing) MLB publishes drag coefficients (values of in ). Do a little research to compare values you would compute from your estimates of . How far off are we and what might be the cause of the error? (See )   "
},
{
  "id": "FastPitchWorksheet-2",
  "level": "2",
  "url": "FastPitchWorksheet.html#FastPitchWorksheet-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "   Here we will use an ODE model to determine whether a 100.9 mph pitch recorded in 1974 was in fact a faster fastball than the \"fastest pitch ever\", which was a 105.1 mph pitch in 2010.    "
},
{
  "id": "baseball_dimensional_model",
  "level": "2",
  "url": "FastPitchWorksheet.html#baseball_dimensional_model",
  "type": "Worksheet Exercise",
  "number": "2.2.1",
  "title": "",
  "body": " Define variables as follows: Assume that the force acting to slow down a baseball in flight is given by    Use dimensional analysis to explain why the exponent must equal .    Explain why it makes sense to have the minus sign in front of .      Attach units to all the terms on both sides of the given equation and observe that time units only appear in one place on the right-hand side.  "
},
{
  "id": "FastPitchWorksheet-6",
  "level": "2",
  "url": "FastPitchWorksheet.html#FastPitchWorksheet-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Time to Plate: Delivery Time: Extension: "
},
{
  "id": "pitch_data",
  "level": "2",
  "url": "FastPitchWorksheet.html#pitch_data",
  "type": "Table",
  "number": "2.2.1",
  "title": "Baseball Velocity Data",
  "body": "Baseball Velocity Data    Velocity (mph) Time to Plate (s) Delivery Time (s) Extension (ft)    85 1.2 0.74 5.1    83.7 1.3 0.84 6.2    79.3 1.25 0.79 4.1    83.6 1.4 0.95 4.8    82.3 1.21 0.75 5.7    85.7 1.26 0.81 5.0    81.7 1.17 0.71 5.9    86.7 1.24 0.79 4.5    77.7 1.23 0.72 5.7    72.7 1.25 0.74 3.2    77.3 1.37 0.86 5.8    76.9 1.25 0.74 5.8    73 1.22 0.69 4.4    77.1 1.24 0.78 6    "
},
{
  "id": "FastPitchWorksheet-8",
  "level": "2",
  "url": "FastPitchWorksheet.html#FastPitchWorksheet-8",
  "type": "Worksheet Exercise",
  "number": "2.2.2",
  "title": "",
  "body": " Now we will use Insightmaker and the table data.    Construct an Insight for the ODE model presented above using as a variable and and its integral (position) as stocks. Be sure to carefully include all units (paying careful attention to them).    Using either slider functionality or Insightmaker's optimization algorithm, construct an estimate of for each row of . Be sure to carefully document the procedure you use for your estimates as they might vary. Note: Some of the rows of are bad data; your estimates of should find them so that you can throw them out.    "
},
{
  "id": "FastPitchWorksheet-9",
  "level": "2",
  "url": "FastPitchWorksheet.html#FastPitchWorksheet-9",
  "type": "Worksheet Exercise",
  "number": "2.2.3",
  "title": "",
  "body": " Aroldis Chapman's fastest recorded pitch was a 105.1 mph fastball on September 24, 2010, and its velocity was measured 50.5 ft from home plate. Nolan Ryan threw a pitch whose velocity was measured at 100.9 mph at a distance of 10 ft from home plate. Use your Insight and estimate(s) of to decide which of these two pitches was likely the fastest.  "
},
{
  "id": "FastPitchWorksheet-10",
  "level": "2",
  "url": "FastPitchWorksheet.html#FastPitchWorksheet-10",
  "type": "Worksheet Exercise",
  "number": "2.2.4",
  "title": "",
  "body": " Now (2024 as of writing) MLB publishes drag coefficients (values of in ). Do a little research to compare values you would compute from your estimates of . How far off are we and what might be the cause of the error? (See )  "
},
{
  "id": "CancerTreatmentWorksheet",
  "level": "1",
  "url": "CancerTreatmentWorksheet.html",
  "type": "Worksheet",
  "number": "2.3",
  "title": "Modeling Cancer Treatment",
  "body": " Modeling Cancer Treatment     Develop a descriptive Insightmaker model from a differential equation modeling the growth of a tumor under treatment.    Analyze the cancer treatment model qualitiatively and generate supporting graphs with Insightmaker.    Estimate a tumor's intirinsic growth rate using Insightmkaer's optimization capabilities in order to decide whether to proceed with clinical trials.     This worksheet is based on   Suppose you work for a drug company that has recently discovered a new cancer drug. It has been tried out on a small number of patients and now you need to study the results further before proceeding to widespread clinical trials. The model describing the relative (as a percentage of maximal possible tumor size, thus dimensionless) radius of a tumor for a dosage of relative size is given by the differential equation where is a parameter called the intrinsic growth rate . The time units are months. Suppose, throughout this worksheet, that at time of detection .   Explain why the expressions and are both always positive. Develop an Insight with one inflow, one outflow, and two variables (with sliders). ( For students turning this in, you will need to submit your Insightmaker files. )    Use the model you have developed above to describe the long-run behavior of the tumor under each of the following scenarios:     (no treatment)     (no growth)   Explain why each of these results makes practical sense.   Determine the equilibrium solutions of the given model algebraically (show your work) and determine their stability depending on the values of and . What is the desirable (in terms of real-world cancer treatment) in terms of the equilibria and stability of them, and how must and be related to achieve this outcome. Include graphs from Insightmaker simulations to illustrate each possible outcome with descriptions that are accessible to a non-mathematical audience.    Suppose that after detection Patient #1 was given a regular dose of the drug with and their tumor size grew according to the following table:   Tumor Size for Patient #1    Time (months)     1 0.091677    2 0.152964    3 0.196308    4 0.217980    5 0.227098    6 0.230665    Use a converter for this data and the method of least-squares (recall how this was done in ) to determine the intrinsic growth rate for this tumor.   (Ethical Question) Suppose that possibly deadly side effects occur when the drug is administered with . Based on the results of patient #1, should widespread clinical trials proceed? Try to describe several considerations in your answer from the point of view of multiple stakeholders.    How realistic does this model feel? What aspects seem realistic and which ones don't? You can answer this mathematically as well as by doing a little internet research about cancer treatment.   "
},
{
  "id": "CancerTreatmentWorksheet-2",
  "level": "2",
  "url": "CancerTreatmentWorksheet.html#CancerTreatmentWorksheet-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "   Develop a descriptive Insightmaker model from a differential equation modeling the growth of a tumor under treatment.    Analyze the cancer treatment model qualitiatively and generate supporting graphs with Insightmaker.    Estimate a tumor's intirinsic growth rate using Insightmkaer's optimization capabilities in order to decide whether to proceed with clinical trials.    "
},
{
  "id": "CancerTreatmentWorksheet-4",
  "level": "2",
  "url": "CancerTreatmentWorksheet.html#CancerTreatmentWorksheet-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intrinsic growth rate "
},
{
  "id": "CancerTreatmentWorksheet-5",
  "level": "2",
  "url": "CancerTreatmentWorksheet.html#CancerTreatmentWorksheet-5",
  "type": "Worksheet Exercise",
  "number": "2.3.1",
  "title": "",
  "body": " Explain why the expressions and are both always positive. Develop an Insight with one inflow, one outflow, and two variables (with sliders). ( For students turning this in, you will need to submit your Insightmaker files. )  "
},
{
  "id": "CancerTreatmentWorksheet-6",
  "level": "2",
  "url": "CancerTreatmentWorksheet.html#CancerTreatmentWorksheet-6",
  "type": "Worksheet Exercise",
  "number": "2.3.2",
  "title": "",
  "body": " Use the model you have developed above to describe the long-run behavior of the tumor under each of the following scenarios:     (no treatment)     (no growth)   Explain why each of these results makes practical sense. "
},
{
  "id": "CancerTreatmentWorksheet-7",
  "level": "2",
  "url": "CancerTreatmentWorksheet.html#CancerTreatmentWorksheet-7",
  "type": "Worksheet Exercise",
  "number": "2.3.3",
  "title": "",
  "body": " Determine the equilibrium solutions of the given model algebraically (show your work) and determine their stability depending on the values of and . What is the desirable (in terms of real-world cancer treatment) in terms of the equilibria and stability of them, and how must and be related to achieve this outcome. Include graphs from Insightmaker simulations to illustrate each possible outcome with descriptions that are accessible to a non-mathematical audience.  "
},
{
  "id": "tumor_growth_estimate",
  "level": "2",
  "url": "CancerTreatmentWorksheet.html#tumor_growth_estimate",
  "type": "Worksheet Exercise",
  "number": "2.3.4",
  "title": "",
  "body": " Suppose that after detection Patient #1 was given a regular dose of the drug with and their tumor size grew according to the following table:   Tumor Size for Patient #1    Time (months)     1 0.091677    2 0.152964    3 0.196308    4 0.217980    5 0.227098    6 0.230665    Use a converter for this data and the method of least-squares (recall how this was done in ) to determine the intrinsic growth rate for this tumor. "
},
{
  "id": "CancerTreatmentWorksheet-9",
  "level": "2",
  "url": "CancerTreatmentWorksheet.html#CancerTreatmentWorksheet-9",
  "type": "Worksheet Exercise",
  "number": "2.3.5",
  "title": "",
  "body": " (Ethical Question) Suppose that possibly deadly side effects occur when the drug is administered with . Based on the results of patient #1, should widespread clinical trials proceed? Try to describe several considerations in your answer from the point of view of multiple stakeholders.  "
},
{
  "id": "CancerTreatmentWorksheet-10",
  "level": "2",
  "url": "CancerTreatmentWorksheet.html#CancerTreatmentWorksheet-10",
  "type": "Worksheet Exercise",
  "number": "2.3.6",
  "title": "",
  "body": " How realistic does this model feel? What aspects seem realistic and which ones don't? You can answer this mathematically as well as by doing a little internet research about cancer treatment.  "
},
{
  "id": "DrugDosageWorksheet",
  "level": "1",
  "url": "DrugDosageWorksheet.html",
  "type": "Worksheet",
  "number": "2.4",
  "title": "Multiple Drug Doses",
  "body": " Multiple Drug Doses     We will model dosing of a drug under multiple dosing protocols.    We will use the pulse function to turn on and off flows at regular time intervals.      This worksheet is based on    In this worksheet we consider the problem of administering a drug under the following conditions:    The minimum amount of drug in the bloodstream to be effective is mg. On the other hand, the maximum amount to avoid adverse effects is mg. Thus, over the 24 hour dosing period, the amount in the blood must remain between mg and mg.    The drug is removed from the bloodstream and moved into other tissues (where it is effective) at a rate proportional to the amount present in the bloodstream per hour. The half-life of the drug in the body is hours.    Due to staffing patterns, a nurse will only administer an injection or change an IV bag at intervals that are an integer number of hours, e.g. every hour on the hour.    We wish to model and compare the following two dosing protocols:     Continuous Drip: Under this protocol the drug is administered several times in amounts of mg at a constant rate over some fixed time period. For instance, every two hours the nurse might attach a new IV bag that continuously administers mg over the course of minutes.     Bolus Injections: The drug may be administered as a bolus . That is, a certain amount of drug is injected all at once (essentially instantaneously). For instance, the nurse may inject mg exactly every two hours.    In order to model these protocols, you will find the Insightmaker Pulse function useful. The pulse function works as follows:  Pulse(Time, Height, Width, Repeat)  will create a \"pulse train\" starting at time , of height , with each bump of width , repeating every time units. For instance, the graph of is shown below.   A pulse train starting at , of height , width , repeating every time units.     The pulse function should be used to \"turn on\" and \"turn off\" the drug flow.  Continuous Drip Exercises   Exercises 1-3 are about protocol (a) above.    Build an Insightmaker model to model the continuous drip dosing method assuming the patient initially has no drug in their bloodstream. The model should have sliders for the duration of the drip, the amount in each IV bag, and the frequency with which the IV bag is changed.    Use your Insight to give several combinations of drip duration, IV bag dose quantity, and IV bag change frequency that gives acceptable results. Include graphs for each combination and use them to explain the general effect of varying each of the parameters.    Among the several possible combinations you gave above, what are some of the considerations you might use to choose the \"best\" of them. Use some mathematics to decide which of your combinations is best for each of your considerations.    Bolus Exercises   Exercises 4-6 are about protocol (b) above.    Modify your model (by taking a limit, approximately) to model the situation of bolus injections and give several combinations of dose size and frequency that are acceptable. Explain things thoroughly.    Re-answer what the \"best\" combination of dose size and frequency is among your combinations for bolus injections. Why might you choose bolus injections vs. continuous drips?    What does the graph of the flow function really look like in an idealized (instantaneous injection) bolus injection model?    "
},
{
  "id": "DrugDosageWorksheet-2",
  "level": "2",
  "url": "DrugDosageWorksheet.html#DrugDosageWorksheet-2",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "   We will model dosing of a drug under multiple dosing protocols.    We will use the pulse function to turn on and off flows at regular time intervals.    "
},
{
  "id": "DrugDosageWorksheet-7-1-1",
  "level": "2",
  "url": "DrugDosageWorksheet.html#DrugDosageWorksheet-7-1-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Continuous Drip: "
},
{
  "id": "DrugDosageWorksheet-7-2-1",
  "level": "2",
  "url": "DrugDosageWorksheet.html#DrugDosageWorksheet-7-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Bolus Injections: "
},
{
  "id": "pulse_train",
  "level": "2",
  "url": "DrugDosageWorksheet.html#pulse_train",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": " A pulse train starting at , of height , width , repeating every time units.    "
},
{
  "id": "DrugDosageWorksheet-11-3",
  "level": "2",
  "url": "DrugDosageWorksheet.html#DrugDosageWorksheet-11-3",
  "type": "Worksheet Exercise",
  "number": "2.4.1",
  "title": "",
  "body": " Build an Insightmaker model to model the continuous drip dosing method assuming the patient initially has no drug in their bloodstream. The model should have sliders for the duration of the drip, the amount in each IV bag, and the frequency with which the IV bag is changed.  "
},
{
  "id": "DrugDosageWorksheet-11-4",
  "level": "2",
  "url": "DrugDosageWorksheet.html#DrugDosageWorksheet-11-4",
  "type": "Worksheet Exercise",
  "number": "2.4.2",
  "title": "",
  "body": " Use your Insight to give several combinations of drip duration, IV bag dose quantity, and IV bag change frequency that gives acceptable results. Include graphs for each combination and use them to explain the general effect of varying each of the parameters.  "
},
{
  "id": "DrugDosageWorksheet-11-5",
  "level": "2",
  "url": "DrugDosageWorksheet.html#DrugDosageWorksheet-11-5",
  "type": "Worksheet Exercise",
  "number": "2.4.3",
  "title": "",
  "body": " Among the several possible combinations you gave above, what are some of the considerations you might use to choose the \"best\" of them. Use some mathematics to decide which of your combinations is best for each of your considerations.  "
},
{
  "id": "DrugDosageWorksheet-12-3",
  "level": "2",
  "url": "DrugDosageWorksheet.html#DrugDosageWorksheet-12-3",
  "type": "Worksheet Exercise",
  "number": "2.4.4",
  "title": "",
  "body": " Modify your model (by taking a limit, approximately) to model the situation of bolus injections and give several combinations of dose size and frequency that are acceptable. Explain things thoroughly.  "
},
{
  "id": "DrugDosageWorksheet-12-4",
  "level": "2",
  "url": "DrugDosageWorksheet.html#DrugDosageWorksheet-12-4",
  "type": "Worksheet Exercise",
  "number": "2.4.5",
  "title": "",
  "body": " Re-answer what the \"best\" combination of dose size and frequency is among your combinations for bolus injections. Why might you choose bolus injections vs. continuous drips?  "
},
{
  "id": "DrugDosageWorksheet-12-5",
  "level": "2",
  "url": "DrugDosageWorksheet.html#DrugDosageWorksheet-12-5",
  "type": "Worksheet Exercise",
  "number": "2.4.6",
  "title": "",
  "body": " What does the graph of the flow function really look like in an idealized (instantaneous injection) bolus injection model?  "
},
{
  "id": "HalfWheelingWorksheet",
  "level": "1",
  "url": "HalfWheelingWorksheet.html",
  "type": "Worksheet",
  "number": "3.1",
  "title": "Half Wheel Hell",
  "body": " Half Wheel Hell     Introduce a linear system of differential equations and explore possible behaviors of the long run solutions.     \"Half wheeling\" occurs when two cyclists ride side-by-side and one of them insists on always keeping their front wheel one wheel radius ahead of the other rider's wheel (the title of this worksheet is from ). When the rider who is half a wheel behind tries to match the velocity of the rider who is half a wheel in front, the front rider accelerates to maintain the half wheel gap. We wish to model this scenario with a system of differential equations and decide the answer to the following questions:   Is it always the case that riding with a half wheeler will result in unbounded velocities or can an equilibrium be achieved?    Are there some scenarios in which velocities oscillate and some where they don't?     How many stocks should we have present in this model and what are they? Create names for them.   Suppose we have two riders: Rider 1 (Speed-match Freddy, who is nice and sociable) and Rider 2 (Half-wheel Eddy, who is kind of a jerk). They each change their velocities according to the other rider as follows:   Freddy changes his velocity at a rate proportional to the difference in the two rider's velocities with constant of proportionality . If Eddy is faster, Freddy speeds up. If Eddy is slower, Freddy slows down.    Eddy changes his velocity at a rate proportional to the difference between his position and Freddy's and meters with constant of proportionality . If Eddy is more than meters ahead of Freddy, he slows down. If Eddy is less than meters ahead of Freddy, he speeds up.   Develop a system of four differential equations to model this scenario and turn them into an Insight with variables and .    Assume and . If the riders start perfectly side-by-side at a velocity of m\/s, what will their long run velocities be? Will they be separated by meters? Show visuals with both the time series plot and the scatter plot with \"show lines\" on and \"show points\" off.    Leaving , is there a value of where velocities approach equilibrium rapidly without oscillation? Can you find it?    Suppose Freddy gets fed up with Eddy and quits being nice. He decides to start half-wheeling as well. Modify the system of differential equations and see what happens. Is the new behavior of the velicities what you expect? Does one rider stay consistently in fron of the other?   "
},
{
  "id": "HalfWheelingWorksheet-2",
  "level": "2",
  "url": "HalfWheelingWorksheet.html#HalfWheelingWorksheet-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "   Introduce a linear system of differential equations and explore possible behaviors of the long run solutions.    "
},
{
  "id": "half-wheel-stocks",
  "level": "2",
  "url": "HalfWheelingWorksheet.html#half-wheel-stocks",
  "type": "Worksheet Exercise",
  "number": "3.1.1",
  "title": "",
  "body": "How many stocks should we have present in this model and what are they? Create names for them. "
},
{
  "id": "HalfWheelingWorksheet-5",
  "level": "2",
  "url": "HalfWheelingWorksheet.html#HalfWheelingWorksheet-5",
  "type": "Worksheet Exercise",
  "number": "3.1.2",
  "title": "",
  "body": " Suppose we have two riders: Rider 1 (Speed-match Freddy, who is nice and sociable) and Rider 2 (Half-wheel Eddy, who is kind of a jerk). They each change their velocities according to the other rider as follows:   Freddy changes his velocity at a rate proportional to the difference in the two rider's velocities with constant of proportionality . If Eddy is faster, Freddy speeds up. If Eddy is slower, Freddy slows down.    Eddy changes his velocity at a rate proportional to the difference between his position and Freddy's and meters with constant of proportionality . If Eddy is more than meters ahead of Freddy, he slows down. If Eddy is less than meters ahead of Freddy, he speeds up.   Develop a system of four differential equations to model this scenario and turn them into an Insight with variables and .  "
},
{
  "id": "HalfWheelingWorksheet-6",
  "level": "2",
  "url": "HalfWheelingWorksheet.html#HalfWheelingWorksheet-6",
  "type": "Worksheet Exercise",
  "number": "3.1.3",
  "title": "",
  "body": " Assume and . If the riders start perfectly side-by-side at a velocity of m\/s, what will their long run velocities be? Will they be separated by meters? Show visuals with both the time series plot and the scatter plot with \"show lines\" on and \"show points\" off.  "
},
{
  "id": "HalfWheelingWorksheet-7",
  "level": "2",
  "url": "HalfWheelingWorksheet.html#HalfWheelingWorksheet-7",
  "type": "Worksheet Exercise",
  "number": "3.1.4",
  "title": "",
  "body": " Leaving , is there a value of where velocities approach equilibrium rapidly without oscillation? Can you find it?  "
},
{
  "id": "HalfWheelingWorksheet-8",
  "level": "2",
  "url": "HalfWheelingWorksheet.html#HalfWheelingWorksheet-8",
  "type": "Worksheet Exercise",
  "number": "3.1.5",
  "title": "",
  "body": " Suppose Freddy gets fed up with Eddy and quits being nice. He decides to start half-wheeling as well. Modify the system of differential equations and see what happens. Is the new behavior of the velicities what you expect? Does one rider stay consistently in fron of the other?  "
},
{
  "id": "systems_salt_tanks",
  "level": "1",
  "url": "systems_salt_tanks.html",
  "type": "Section",
  "number": "3.2",
  "title": "Salt Tank Models",
  "body": " Salt Tank Models     Introduce mixing in and single tank as a first order differential equation.    Create and analyze systems of interconnected tanks as linear systems of ODEs.    Use a conditional in formulas for flow rates.      A standard first-order ODE is associated to the following problem type: The Basic Salt Tank Problem  A brine (salt water) solution of conentration kg\/L at a rate of L\/min flows into a tank of volume of initially pure water. A well-mixed solution drains out the bottom of the tank at L\/min. How much salt is in the tank as a function of time?  We call these problems \"salt tank problems\".  In this section we explore this type of problem in general with multiple tanks and perhaps without conserved volumes. The worksheet in the next section presents the modeling scenario in and section 6.5.1 of     Basic Mixing Problems  To present the problem in in ODE form, letting denote the amount of salt in the tank at a time of minutes, we have We can arrive at essentially through unit analysis. Since the amount of salt in a tank sounds exactly like a stock, we can represent it as the following Insight:    The basic one-tank mixing Insight.     We may determine the solution of this IVP analytically to be Running the given Insight with , , and (all with associated units) yields the corresponding graph  The graph of a solution to the basic salt tank problem.    The long run equilibrium amount of salt in the tank is kg. This makes sense as it yields a concentration of kg\/L. In the log run all the mixture in the tank is inflow mixture.   In your own copy of , create a variable that is equal to . For a given , , and , use the optimization algorithm to find the equilibrium value of by imnimizing the integral of this new variable.   Now we will consider the following questions:   What if there are several interconnected tanks?    What if the inflow and outflow rates are not the same?       Two Tanks with Constant Fluid Volume  Consider the first problem:  The Two Tank Mixing Problem  Consider two interconnected tanks initially containing fresh water, call them Tank 1 and Tank 2, of volumes L and L, respectively. A brine solution of concentration kg\/L flows into Tank 1 from an external source at a rate of L\/min. A well-mixed solution froms from Tank 1 to Tank 2 at a rate of L\/min and from Tank 2 to Tank 1 at a rate of L\/min. Finally, a well-mixed solution exits Tank 2 at a rate of L\/min.    This is a scenario where building the Insight is perhaps easier than building the differential equations first. We do so as follows:   Create stocks and for the amount of salt, in kg, in Tank 1 and Tank 2, respectively. Both should have initial values of zero.    Create flows into Tank 1 from the outside and from Tank 2. Likewise, create flows out of Tank 2 to the outside and to Tank 1.    Create variables for , , , , , , and .     Now we need to create links based on what the various salt rates depend on. The best strategy for this is to take each tank and apply the idiom diagram shown below, which corresponds to the ODE   The one tank mixing idiom.    Splitting the inflows and outflows as necessary for each tank we may obtain the following table of linkages:   Variable Links in a Two Tank Mixing Problem    Link Source Target    1 External Flow into Tank 1    2 External Flow into Tank 1    3 Tank 1 to Tank 2    4 Tank 1 to Tank 2    5 Tank 2 to Tank 1    6 Tank 2 to Tank 1    7 External Flow out of Tank 2    8 External Flow out of Tank 2    At this point we have the full diagram:  The full two-tank diagram.     While this diagram may seem complicated, we now see that each ODE in our system will have three terms, what their signs are, and on what variables they depend. We have   Using these to build our flow rates in the diagram. Using parameter values indicated in the table nad running for minutes, we obtain the following ( ):                               Two tank time series graphs.       In each of these graphs we see the long run behavior yields a concentration of about kg\/L, as expected. We can also see the equilibrium solutions approached in the following scatter plot:  Scatter plot for the two tank problem. Dot at the equilibrium and arrow added.        Two Tanks without Constant Fluid Volume  Notice that in the previous section we carefully chose our flow rates into and out of each tank so that the net inflow was zero. That is, If this is not the case, then we will need to modify our model slightly and be careful of division by zero.  In order to allow for the volume in each tank to be variable, we create links to the volume variables, and , from the appropriate rate variables. Now, after removing the sliders for and , we may enter in the formulas for and , respectively (with initial volumes as in the previous section). Note that care with units must be taken when entering these formulas; the first would be entered as {3 Liters}+([r_in]-[r_1_2]+[r_2_1])*{Minutes() Minutes} .  Now if we run the simulation with , we obtain the time series graphs  Variable volume salt tank amounts without worrying about zero or negative volumes.    We have a problem because the volume of liquid in Tank 2 approaces zero in minutes. This is when we can use one of the most powerful features of Insightmaker.   Conditional Flow Rates  Using the If Then Else function in the General Functions Menu, we can add conditions to our flow rates. The syntax is given by IfThenElse(Test Condition, Value if True, Value if False) .   In our case we must link and to all flows and apply the condition that both volumes are positive to all the flow rates. For instance, the Outflow flow rate will be given by IfThenElse([V1]>{0 Liters} and [V2]>{0 Liters},[r_out]*[A2]\/[V2],0) . Applying this we obtain the following time series:  Variable volume salt tank amounts using a conditional to deal with zero or negative volumes.    Now we see the flows all turn off at seconds.  The Insight for this scenario may be found at . One could argue the number of links starts to make the Insight inelegant. At this stage it might be useful to experiment with ghosting primitives (see ). A slightly more visually pleasing Insight is available at .  Try to re-create the results of the variable volume tanks using stocks for each volume. This will avoid putting explicit formulas for the volumes as functions of time.   "
},
{
  "id": "systems_salt_tanks-2",
  "level": "2",
  "url": "systems_salt_tanks.html#systems_salt_tanks-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "   Introduce mixing in and single tank as a first order differential equation.    Create and analyze systems of interconnected tanks as linear systems of ODEs.    Use a conditional in formulas for flow rates.    "
},
{
  "id": "salt-tank-statement",
  "level": "2",
  "url": "systems_salt_tanks.html#salt-tank-statement",
  "type": "Problem",
  "number": "3.2.1",
  "title": "The Basic Salt Tank Problem.",
  "body": "The Basic Salt Tank Problem  A brine (salt water) solution of conentration kg\/L at a rate of L\/min flows into a tank of volume of initially pure water. A well-mixed solution drains out the bottom of the tank at L\/min. How much salt is in the tank as a function of time?  "
},
{
  "id": "Basic-Mixing-Insight",
  "level": "2",
  "url": "systems_salt_tanks.html#Basic-Mixing-Insight",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " The basic one-tank mixing Insight.   "
},
{
  "id": "BasicMixingGraph",
  "level": "2",
  "url": "systems_salt_tanks.html#BasicMixingGraph",
  "type": "Figure",
  "number": "3.2.3",
  "title": "",
  "body": " The graph of a solution to the basic salt tank problem.    "
},
{
  "id": "basic_mixing-5",
  "level": "2",
  "url": "systems_salt_tanks.html#basic_mixing-5",
  "type": "Checkpoint",
  "number": "3.2.4",
  "title": "",
  "body": " In your own copy of , create a variable that is equal to . For a given , , and , use the optimization algorithm to find the equilibrium value of by imnimizing the integral of this new variable.  "
},
{
  "id": "tank_idiom",
  "level": "2",
  "url": "systems_salt_tanks.html#tank_idiom",
  "type": "Figure",
  "number": "3.2.5",
  "title": "",
  "body": " The one tank mixing idiom.    "
},
{
  "id": "two-tank-conserved-volume-5",
  "level": "2",
  "url": "systems_salt_tanks.html#two-tank-conserved-volume-5",
  "type": "Table",
  "number": "3.2.6",
  "title": "Variable Links in a Two Tank Mixing Problem",
  "body": " Variable Links in a Two Tank Mixing Problem    Link Source Target    1 External Flow into Tank 1    2 External Flow into Tank 1    3 Tank 1 to Tank 2    4 Tank 1 to Tank 2    5 Tank 2 to Tank 1    6 Tank 2 to Tank 1    7 External Flow out of Tank 2    8 External Flow out of Tank 2    "
},
{
  "id": "two-tank-full",
  "level": "2",
  "url": "systems_salt_tanks.html#two-tank-full",
  "type": "Figure",
  "number": "3.2.7",
  "title": "",
  "body": " The full two-tank diagram.    "
},
{
  "id": "two-tank-time-series",
  "level": "2",
  "url": "systems_salt_tanks.html#two-tank-time-series",
  "type": "Figure",
  "number": "3.2.8",
  "title": "",
  "body": " Two tank time series graphs.    "
},
{
  "id": "two-tank-phase",
  "level": "2",
  "url": "systems_salt_tanks.html#two-tank-phase",
  "type": "Figure",
  "number": "3.2.9",
  "title": "",
  "body": " Scatter plot for the two tank problem. Dot at the equilibrium and arrow added.    "
},
{
  "id": "bad_volumes",
  "level": "2",
  "url": "systems_salt_tanks.html#bad_volumes",
  "type": "Figure",
  "number": "3.2.10",
  "title": "",
  "body": " Variable volume salt tank amounts without worrying about zero or negative volumes.    "
},
{
  "id": "two-tank-decreasing-volume-6",
  "level": "2",
  "url": "systems_salt_tanks.html#two-tank-decreasing-volume-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Outflow "
},
{
  "id": "two-tank-decreasing-volume-8",
  "level": "2",
  "url": "systems_salt_tanks.html#two-tank-decreasing-volume-8",
  "type": "Checkpoint",
  "number": "3.2.12",
  "title": "",
  "body": "Try to re-create the results of the variable volume tanks using stocks for each volume. This will avoid putting explicit formulas for the volumes as functions of time. "
},
{
  "id": "systems_diseases",
  "level": "1",
  "url": "systems_diseases.html",
  "type": "Section",
  "number": "3.3",
  "title": "Disease Models",
  "body": " Disease Models     Develop the basic SIR model for the spread of an infectious disease.    Estimate parameters in the SIR model using data.    Consider other versions and uses of the SIR model.      The Basic SIR Model  The basic model for the spread of an infectious disease involves three sub-populations of a larger one.   The sub-population of individuals who are susceptible to infection. The number of individuals in this population is denoted by .    The sub-population of individuals who are infected. The number of individuals in this population is denoted by .    The sub-population of individuals who are recovered from the disease. The number of individuals in this population is denoted by .     In order to simplify the model, we assume that   The total population remains constant, i.e. nobody enters or leaves the local population in which we are modeling spread of the disease.    Once recovered, individuals gain immunity from re-infection. This is often true for common diseases, at least on the time scale in which we might model.   A good test-study for this situation is the case presented in and develobed as a SIMIODE modeling scenario in . In this scenario we have a British boarding school where an influenza outbreak occured. The number of infected students each day of the outbreak is given by the table:  Influenza Outbreak Model    Day 0 1 2 3 4 5 6 7 8 9 10 11 12 13    infected 1 3 25 72 222 282 265 233 189 123 70 25 11 4    The total number of boys at the school was 763.  To build the model, we start with the rumor spread model , thinking of the infection as a rumor. Thus, we have two stocks and , with a flow from to given by the formula , where and are in units of individuals and is in units of . We assume that a consant percentage of the infected individuals recover on a daily basis. Hence the flow rate from to is given by , where has units of . This yields the Insight , with main diagram  The SIR model diagram.    and system of differential equations given by Initial values are given by , , and .  To estimate and , we use the data given in as a converter and use the optimization algorithm to minimize the sum of squared errors as in to obtain and . This yields the time series graphs (with the data shown)  SIR from boarding school matched to data.    To show the total population being conserved, we can apply the \"use areas\" in the graph to obtain the following:  Using area graphs to show the conserved population in the basic SIR model.    This graphical representation is particularly nice when a sum of quantities is conserved through time. This could be total population or total energy (potential plus kinetic) in a mechanical system.    Variations on the SIR Model  There are many variations on the SIR model. These variations could be mathematical or contextual in nature. A nice survey is available at . A fun (or horrifying variation) is to make the infected populations zombies, as in . The following exercise explores one possible variation given in Part II of .  Consider the scenario where instead of \"recovered\", we call the stock described by \"removed\" in the sense that they are removed from the and populations. Suppose that we have a population of individuals, , , and . Let and . Now, assume further that individuals in the removed population can convince individuals in the susceptible population to practice better hygiene to avoid infection. Essentially, susceptible individuals can be \"infected\" with better health practices. Create a new model with a new variable that describes this interaction in a way similar to the - interaction.   How large does need to be to ensure the infected population never goes above of the population?    What are real-world things that would impact the size of ?     "
},
{
  "id": "systems_diseases-2",
  "level": "2",
  "url": "systems_diseases.html#systems_diseases-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "   Develop the basic SIR model for the spread of an infectious disease.    Estimate parameters in the SIR model using data.    Consider other versions and uses of the SIR model.    "
},
{
  "id": "SIR_data",
  "level": "2",
  "url": "systems_diseases.html#SIR_data",
  "type": "Table",
  "number": "3.3.1",
  "title": "Influenza Outbreak Model",
  "body": " Influenza Outbreak Model    Day 0 1 2 3 4 5 6 7 8 9 10 11 12 13    infected 1 3 25 72 222 282 265 233 189 123 70 25 11 4    "
},
{
  "id": "SIR_diagram",
  "level": "2",
  "url": "systems_diseases.html#SIR_diagram",
  "type": "Figure",
  "number": "3.3.2",
  "title": "",
  "body": " The SIR model diagram.    "
},
{
  "id": "SIR_boarding_school_graph",
  "level": "2",
  "url": "systems_diseases.html#SIR_boarding_school_graph",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": " SIR from boarding school matched to data.    "
},
{
  "id": "SIR_areas",
  "level": "2",
  "url": "systems_diseases.html#SIR_areas",
  "type": "Figure",
  "number": "3.3.4",
  "title": "",
  "body": " Using area graphs to show the conserved population in the basic SIR model.    "
},
{
  "id": "Variations_on_SIR-3",
  "level": "2",
  "url": "systems_diseases.html#Variations_on_SIR-3",
  "type": "Checkpoint",
  "number": "3.3.5",
  "title": "",
  "body": "Consider the scenario where instead of \"recovered\", we call the stock described by \"removed\" in the sense that they are removed from the and populations. Suppose that we have a population of individuals, , , and . Let and . Now, assume further that individuals in the removed population can convince individuals in the susceptible population to practice better hygiene to avoid infection. Essentially, susceptible individuals can be \"infected\" with better health practices. Create a new model with a new variable that describes this interaction in a way similar to the - interaction.   How large does need to be to ensure the infected population never goes above of the population?    What are real-world things that would impact the size of ?   "
},
{
  "id": "systems_oscillators",
  "level": "1",
  "url": "systems_oscillators.html",
  "type": "Section",
  "number": "3.4",
  "title": "Oscillators",
  "body": " Oscillators     Introduce the basic diagram for second order differential equations.    Explore the basic harmonic oscillator (damped or not, forced or not).    Consider a driven nonlinear pendulum as an example that is not solvable by analytic methods.      Second-order ODEs are ones of the form To handle these equations numerically, we must convert such ODEs to a system of first-order ODEs. We do this by introducting the variable . We use the letter because we are now thinking of as a position and as a velocity. This yields the system of first order ODEs The basic Insightmaker diagram for a second order equation becomes the following:  The general second order equation diagram.    This construction can be generalized to any higher-order equation by introducing more intermediate stocks for the derivatives.  We will now explore an important class of examples inwhich it makes sense to break the single flow into into multiple branches.    Harmonic Oscillators  harmonic oscillator   A simple harmonic oscillator is a spring-mass system in which the magnitude of the restoring force of the spring is proportional to the dispalcement of the mass. Given the mass and spring constant , the position of the mass satisfies the second-order ODE or equivalently A damped harmonic oscillator has an additional damping term, where the damping is assumed to be proportional to the velocity. Using as the damping coefficient, we have A forced harmonic oscillator introduces an external force function and we have  Note that in spring-mass systems we have , , and positive.   We now explore the behavior of oscillators in various cases with Insightmaker. The Insight used for these is available at . The diagram is given by   The damped and forced oscillator.     No External Force  Analytic methods can be used to show the three possible cases. In each case we show the result with and .    Overdamped: This occurs when . In this case we see and decay to zero rapidly. Using , , and , we obtain the following:  position and velocity graphs for an overdamped oscillator       Underdamped: This occurs when . In this case we see and oscillate with amplitude decaying to zero. Using , , and , we obtain the following:  position and velocity graphs for an underdamped oscillator  In the scatterplot with and on the horizontal and vertical axes, respectively, we see a spiral:  position and velocity graphs for an overdamped oscillator       Underdamped: This occurs when . In this case we see and decaying to zero with an \"almost\" oscillation at the start. Using , , and , we obtain the following:  position and velocity graphs for a critically damped oscillator  In the scatterplot with and on the horizontal and vertical axes, respectively, we see an \"almost\" spiral:  position and velocity graphs for a critically damped oscillator       Notice that all solution other than when will approach zero in the long run. This should make sense as positive damping should slow our mass down.   Periodic Forcing without Damping  Now we explore the effect of a periodic force of the form to an undamped ( ) oscillator with and (the more general case is treated in any standard differential equations text), i.e. When ( ) the oscillator oscillates sinusoidally with period . Because an external force will put the mass into motion, we can let and .     Non-resonant Forcing: This is when the period of the unforced oscillation is not equal to the period of the forcing function.     Resonant Forcing: This is when the period of the forcing function and the unforced oscillation are equal, i.e. .    We will explore the resonant case with Insightmaker. While this is treated analytically in standard texts, we can gain more intuition via simulation. The Insight we will use is at .  We first will simulate with a forcing function (as an Insightmaker variable) called , which is given by the algebraic formula  See Insight for conditional flow function.    Running this simulation and increasing by one repeatedly, we obtain the following sequence of time series graphs. Notice that the oscillator remains motionless until the force is \"turned on\" and then oscillates freely after the force is \"turned off\". Because the second-order ODE we are working with is linear, the response to the sum of forces is equal to the sum of the forced responses (be sure that line makes sense). Because the force over multiple periods is the sum of these shifts of single period forces, we simply sum the graphs to the right (ad-infinitum) to obtain the response to a full sinusoid.    A sequence of responses to a one period sinusoidal force.     Replacing the single period forcing function with we see the linear growth in amplitude. To see this best, we use the Compare Results function under the Tools menu in Insightmaker. Comparing graphs for , we obtain the following:  Linear growth in amplitude illustated as we apply the periodic force over more periods.    The perfect alignment between forcing function and response is key to growth in amplitude. This way the shifted responses (shifted by the period of the forcing function) line up perfectly so that they are vertical stretches of one another. You are encouraged to experiment with the non-resonant case and see how that works out.   What are the possible outcomes of applying a periodic force to a damped oscillator? Consider all possible cases of damping and think about how the results make physical sense.    The oscillator problems presented in this section are rather standard in a first course in differential equations. They are amenable to analytic methods. However, we should keep in mind that Insightmaker doesn't care if an ODE is linear or not. For instance, one may explore the behavior of a non-linear air spring using Insightmaker using essentially the same diagram we used above but with different flow formulas. Using the programming functions in the flow formulas, one may use different damping coefficients depending position and\/or on the sign of the velocity. Linear constant coefficient oscillators are just the beginning.   "
},
{
  "id": "systems_oscillators-2",
  "level": "2",
  "url": "systems_oscillators.html#systems_oscillators-2",
  "type": "Objectives",
  "number": "3.4",
  "title": "",
  "body": "   Introduce the basic diagram for second order differential equations.    Explore the basic harmonic oscillator (damped or not, forced or not).    Consider a driven nonlinear pendulum as an example that is not solvable by analytic methods.    "
},
{
  "id": "second_order_idiom",
  "level": "2",
  "url": "systems_oscillators.html#second_order_idiom",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": " The general second order equation diagram.    "
},
{
  "id": "harmonic_oscillator",
  "level": "2",
  "url": "systems_oscillators.html#harmonic_oscillator",
  "type": "Definition",
  "number": "3.4.2",
  "title": "",
  "body": "harmonic oscillator   A simple harmonic oscillator is a spring-mass system in which the magnitude of the restoring force of the spring is proportional to the dispalcement of the mass. Given the mass and spring constant , the position of the mass satisfies the second-order ODE or equivalently A damped harmonic oscillator has an additional damping term, where the damping is assumed to be proportional to the velocity. Using as the damping coefficient, we have A forced harmonic oscillator introduces an external force function and we have  Note that in spring-mass systems we have , , and positive.  "
},
{
  "id": "damped_forced_oscillator",
  "level": "2",
  "url": "systems_oscillators.html#damped_forced_oscillator",
  "type": "Figure",
  "number": "3.4.3",
  "title": "",
  "body": " The damped and forced oscillator.    "
},
{
  "id": "harmonic_oscillators-5",
  "level": "2",
  "url": "systems_oscillators.html#harmonic_oscillators-5",
  "type": "Exploration",
  "number": "1",
  "title": "No External Force.",
  "body": "No External Force  Analytic methods can be used to show the three possible cases. In each case we show the result with and .    Overdamped: This occurs when . In this case we see and decay to zero rapidly. Using , , and , we obtain the following:  position and velocity graphs for an overdamped oscillator       Underdamped: This occurs when . In this case we see and oscillate with amplitude decaying to zero. Using , , and , we obtain the following:  position and velocity graphs for an underdamped oscillator  In the scatterplot with and on the horizontal and vertical axes, respectively, we see a spiral:  position and velocity graphs for an overdamped oscillator       Underdamped: This occurs when . In this case we see and decaying to zero with an \"almost\" oscillation at the start. Using , , and , we obtain the following:  position and velocity graphs for a critically damped oscillator  In the scatterplot with and on the horizontal and vertical axes, respectively, we see an \"almost\" spiral:  position and velocity graphs for a critically damped oscillator       Notice that all solution other than when will approach zero in the long run. This should make sense as positive damping should slow our mass down.  "
},
{
  "id": "harmonic_oscillators-6",
  "level": "2",
  "url": "systems_oscillators.html#harmonic_oscillators-6",
  "type": "Exploration",
  "number": "2",
  "title": "Periodic Forcing without Damping.",
  "body": "Periodic Forcing without Damping  Now we explore the effect of a periodic force of the form to an undamped ( ) oscillator with and (the more general case is treated in any standard differential equations text), i.e. When ( ) the oscillator oscillates sinusoidally with period . Because an external force will put the mass into motion, we can let and .     Non-resonant Forcing: This is when the period of the unforced oscillation is not equal to the period of the forcing function.     Resonant Forcing: This is when the period of the forcing function and the unforced oscillation are equal, i.e. .    We will explore the resonant case with Insightmaker. While this is treated analytically in standard texts, we can gain more intuition via simulation. The Insight we will use is at .  We first will simulate with a forcing function (as an Insightmaker variable) called , which is given by the algebraic formula  See Insight for conditional flow function.    Running this simulation and increasing by one repeatedly, we obtain the following sequence of time series graphs. Notice that the oscillator remains motionless until the force is \"turned on\" and then oscillates freely after the force is \"turned off\". Because the second-order ODE we are working with is linear, the response to the sum of forces is equal to the sum of the forced responses (be sure that line makes sense). Because the force over multiple periods is the sum of these shifts of single period forces, we simply sum the graphs to the right (ad-infinitum) to obtain the response to a full sinusoid.    A sequence of responses to a one period sinusoidal force.     Replacing the single period forcing function with we see the linear growth in amplitude. To see this best, we use the Compare Results function under the Tools menu in Insightmaker. Comparing graphs for , we obtain the following:  Linear growth in amplitude illustated as we apply the periodic force over more periods.    The perfect alignment between forcing function and response is key to growth in amplitude. This way the shifted responses (shifted by the period of the forcing function) line up perfectly so that they are vertical stretches of one another. You are encouraged to experiment with the non-resonant case and see how that works out.  "
},
{
  "id": "harmonic_oscillators-7",
  "level": "2",
  "url": "systems_oscillators.html#harmonic_oscillators-7",
  "type": "Checkpoint",
  "number": "3.4.5",
  "title": "",
  "body": "What are the possible outcomes of applying a periodic force to a damped oscillator? Consider all possible cases of damping and think about how the results make physical sense. "
},
{
  "id": "systems_ham_grad",
  "level": "1",
  "url": "systems_ham_grad.html",
  "type": "Section",
  "number": "3.5",
  "title": "Conserved Quantities",
  "body": " Conserved Quantities     Define what a conserved quantity is for a dynamical system.    Show with Insightmaker that in an undamped and unforced oscillator total energy is conserved.     Consevred Quanity (two-dimentional)   Let be the dependent variables of a system of differential equations. A conserved quantity for this system is a scalar-valued function such that is a constant function of .     We have encountered one conserved quantity in . In that model, the quantity remained constant. This was illustrated using the areas graph in the simulation.   Conserved quatities often occur as sums of stocks. The conservation law takes graphical form in the following diagram:  The basic structure for the quantity to be conserved.      The most important conserved quantity in many physical situations is energy . We explore the case of the undamped and unforced harmonic oscillator below.  The Undamped and Unforced Harmonic Oscillator is Conservative The undamped and unforced harmonic oscillator takes form as a system (letting ) The total energy function is given by The first term is the total work done in extending the spring to a position from equilibrium and the second is the work done in accelerating the mass to velocity . We can check that total energy is conserved by differntiating with respect to and using the system of differential equations: In the Insight below, we construct potential and kinetic energy as variables using the above formulas, but also as stocks. The flow rate between the stocks is given by the time derivative of the kinetic energy term, . We then compare the flow calculated energies to the formula computed ones.  A harmonic oscillator with computed energies.     A generalization of the above for a second order system occurs when the system has the form In this case, is called the potnetial function . The total energy is then given by The reader is encouraged to try modeling the motion of a particle in the plane under the influence of various potential functions. It's quite interesting to see what you get!  Energy arguments are unbiquitous in physics. In the next section, we present a scenario in which energy transfer can be used to decide when a toy car with a skidding wheel stops accelerating.  "
},
{
  "id": "systems_ham_grad-2",
  "level": "2",
  "url": "systems_ham_grad.html#systems_ham_grad-2",
  "type": "Objectives",
  "number": "3.5",
  "title": "",
  "body": "   Define what a conserved quantity is for a dynamical system.    Show with Insightmaker that in an undamped and unforced oscillator total energy is conserved.    "
},
{
  "id": "ConservedQuantity",
  "level": "2",
  "url": "systems_ham_grad.html#ConservedQuantity",
  "type": "Definition",
  "number": "3.5.1",
  "title": "Consevred Quanity (two-dimentional).",
  "body": "Consevred Quanity (two-dimentional)   Let be the dependent variables of a system of differential equations. A conserved quantity for this system is a scalar-valued function such that is a constant function of .   "
},
{
  "id": "systems_ham_grad-4",
  "level": "2",
  "url": "systems_ham_grad.html#systems_ham_grad-4",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": " We have encountered one conserved quantity in . In that model, the quantity remained constant. This was illustrated using the areas graph in the simulation.  "
},
{
  "id": "conserved_idiom",
  "level": "2",
  "url": "systems_ham_grad.html#conserved_idiom",
  "type": "Figure",
  "number": "3.5.3",
  "title": "",
  "body": " The basic structure for the quantity to be conserved.    "
},
{
  "id": "systems_ham_grad-7",
  "level": "2",
  "url": "systems_ham_grad.html#systems_ham_grad-7",
  "type": "Example",
  "number": "3.5.4",
  "title": "The Undamped and Unforced Harmonic Oscillator is Conservative.",
  "body": "The Undamped and Unforced Harmonic Oscillator is Conservative The undamped and unforced harmonic oscillator takes form as a system (letting ) The total energy function is given by The first term is the total work done in extending the spring to a position from equilibrium and the second is the work done in accelerating the mass to velocity . We can check that total energy is conserved by differntiating with respect to and using the system of differential equations: In the Insight below, we construct potential and kinetic energy as variables using the above formulas, but also as stocks. The flow rate between the stocks is given by the time derivative of the kinetic energy term, . We then compare the flow calculated energies to the formula computed ones.  A harmonic oscillator with computed energies.    "
},
{
  "id": "systems_ham_grad-8",
  "level": "2",
  "url": "systems_ham_grad.html#systems_ham_grad-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "potnetial function "
},
{
  "id": "RipcordCarsWorksheet",
  "level": "1",
  "url": "RipcordCarsWorksheet.html",
  "type": "Worksheet",
  "number": "3.6",
  "title": "Ripcord Cars with Energy",
  "body": " Ripcord Cars with Energy     Create a model for the motion of a ripcord car based on energy transfer from a spinning wheel to a moving car.    Estimate parameters in the model to match real-world observations.      In this worksheet you will model the motion of a ripcord car. If you don't know what a ripcord car is, this video should help.   What is a ripcord car? The coolest toy ever!    This worksheet is based on the SIMIODE modeling scenario , but modified to use energy transfer as a modeling concept.  A ripcord toy (call it a \"car\") uses a handle with a toothed extension cord (the \"t-stick\") to spin a wheel. When placed on the ground the wheel initially spins exerting a force that accelerates the car. During the spinning on the ground the speed of the wheel decreases, which causes a loss of rotational kinetic energy in the wheel. Assuming energy is conserved (little energy is dissipated as heat or lost to air resistance), the rotational energy lost by the wheel is converted to translational kinetic energy of the car. This transfer of energy continues until pure rolling is achieved. That is, letting be the velocity of the car, be the radius of the wheel, and by the angular velocity of the wheel, the energy transfer from the rotation of the wheel to the translation of the car stops when   Throughout the remaining problems we will assume the following:   The total mass of the car (including the driving wheel) is kg and the mass of the spinning wheel is kg.    When we pull the ripcord, we impart a total energy of J as rotational kinetic energy for the driving wheel of the car.    There are two forces exerted on the car prior to the moment when pure rolling is achieved.   A constant propulsive force exerted by the spinning wheel.    A resistive force proportional to the translational velocity of the car.   After pure rolling is achieved only the resistive force is present.     The data that has been collected (from a film at 30 frames per second) on our car is the following:  Distance Traveled by Ripcord Toy    Frame (at 30 fps) Distance (in cm)    0 0    4 3    8 10    12 21    16 34    20 50    24 68    28 85    32 103    36 120    40 136    44 153    48 168    52 184    56 199    60 214    64 228    68 243    72 257    For reference, the formula for translational kinetic energy is and the formula for rotational kinetic energy is .   Derive an equation involving masses and energy of the wheel and car that holds when pure rolling occurs, i.e. when . (This will be useful when developing the formula for a flow rate.)  Show that the derivative (with respect to time) of is where is the mass of the car, is the sum of all forces on the car, and is the velocity of the car.  Create and Insight to model the motion of the car. Here are some hints:   Use velocity, position, kinetic energy of the wheel, and kinetic energy of the car as stocks.    Since energy is conserved, inflow to the kinetic energy of the car equals the outflow from the kinetic energy of the wheel.    Energy transfer occurs until the equation from holds. After this time, you can ignore the energy stocks.    There should be two flows for the velocity stock.     Estimate , , and to match the data in . Observe that the data has input of frames rather than time. You will need to account for that.  As an alternative approach, without using energy, estimate the time when velocity stops increasing from . Use this as a parameter so that only two variables need to be estimated. Which method yields a smaller SSE from the data?  "
},
{
  "id": "RipcordCarsWorksheet-2",
  "level": "2",
  "url": "RipcordCarsWorksheet.html#RipcordCarsWorksheet-2",
  "type": "Objectives",
  "number": "3.6",
  "title": "",
  "body": "   Create a model for the motion of a ripcord car based on energy transfer from a spinning wheel to a moving car.    Estimate parameters in the model to match real-world observations.    "
},
{
  "id": "ripcord-car-fig",
  "level": "2",
  "url": "RipcordCarsWorksheet.html#ripcord-car-fig",
  "type": "Figure",
  "number": "3.6.1",
  "title": "",
  "body": " What is a ripcord car? The coolest toy ever!   "
},
{
  "id": "toy_data",
  "level": "2",
  "url": "RipcordCarsWorksheet.html#toy_data",
  "type": "Table",
  "number": "3.6.2",
  "title": "Distance Traveled by Ripcord Toy",
  "body": " Distance Traveled by Ripcord Toy    Frame (at 30 fps) Distance (in cm)    0 0    4 3    8 10    12 21    16 34    20 50    24 68    28 85    32 103    36 120    40 136    44 153    48 168    52 184    56 199    60 214    64 228    68 243    72 257    "
},
{
  "id": "energy_eq",
  "level": "2",
  "url": "RipcordCarsWorksheet.html#energy_eq",
  "type": "Worksheet Exercise",
  "number": "3.6.1",
  "title": "",
  "body": "Derive an equation involving masses and energy of the wheel and car that holds when pure rolling occurs, i.e. when . (This will be useful when developing the formula for a flow rate.) "
},
{
  "id": "RipcordCarsWorksheet-5",
  "level": "2",
  "url": "RipcordCarsWorksheet.html#RipcordCarsWorksheet-5",
  "type": "Worksheet Exercise",
  "number": "3.6.2",
  "title": "",
  "body": "Show that the derivative (with respect to time) of is where is the mass of the car, is the sum of all forces on the car, and is the velocity of the car. "
},
{
  "id": "RipcordCarsWorksheet-6",
  "level": "2",
  "url": "RipcordCarsWorksheet.html#RipcordCarsWorksheet-6",
  "type": "Worksheet Exercise",
  "number": "3.6.3",
  "title": "",
  "body": "Create and Insight to model the motion of the car. Here are some hints:   Use velocity, position, kinetic energy of the wheel, and kinetic energy of the car as stocks.    Since energy is conserved, inflow to the kinetic energy of the car equals the outflow from the kinetic energy of the wheel.    Energy transfer occurs until the equation from holds. After this time, you can ignore the energy stocks.    There should be two flows for the velocity stock.    "
},
{
  "id": "RipcordCarsWorksheet-7",
  "level": "2",
  "url": "RipcordCarsWorksheet.html#RipcordCarsWorksheet-7",
  "type": "Worksheet Exercise",
  "number": "3.6.4",
  "title": "",
  "body": "Estimate , , and to match the data in . Observe that the data has input of frames rather than time. You will need to account for that. "
},
{
  "id": "RipcordCarsWorksheet-8",
  "level": "2",
  "url": "RipcordCarsWorksheet.html#RipcordCarsWorksheet-8",
  "type": "Worksheet Exercise",
  "number": "3.6.5",
  "title": "",
  "body": "As an alternative approach, without using energy, estimate the time when velocity stops increasing from . Use this as a parameter so that only two variables need to be estimated. Which method yields a smaller SSE from the data? "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "references-backmatter",
  "level": "1",
  "url": "references-backmatter.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": " References  Julie C. Beier, Jana L. Gevertz and Keith E. Howard, Building Context with Tumor Growth Modeling Projects in Differential Equations , PRIMUS , 25 , 4 , pp 297-395 , Taylor and Francis , , doi:10.1080\/10511970.2014.975881, 2015.  Kurt Bryan, 1-092-DashItAll-ModelingSenario  , doi:\/10.25334\/M2CS-ZA79, 2022.  Kurt Bryan, Differential Equations: A Toolbox for Modeling the World SIMIODE.org, 2021.  Robert Devaney, Morris Hirsh, Stephen Smale, Differential Equations, Dynamical Systems, and an Introduction to Chaos, Third Edition  251-252 Academic Press, 2013.  Stanley Florkowski and Ryan Miller, 6-018-ExploringSIRModel-ModelingScenario  , doi:\/10.25334\/BM76-2667, 2022.  Scott Fortmann-Roe, Insight Maker: A general-purpose tool for web-based modeling simulation , Simulation Modelling Practice and Theory , 47 , 28-45 , 2014, .  Brody Dylan Johnson, 3-100-Ripcord-Toys-ModelingScenario  , doi:\/10.25334\/8CZ1-Y987, 2023.  Maynard Hershon, Half-Wheel Hell and Other Cycling Stories Velo Press, 1994.  Lorelei Koss, SIR Models: Differential Equations that Support the Common Good , CODEE Journal , 12 ,article 6, 2019, .  Erich McAlister, 1-145-FastPitch-ModelingScenario  , doi:\/10.25334\/TV3N-R432, 2022.  Sheila Miller, 6-001-Epidemic-ModelingScenario  , doi:\/10.25334\/N6DF-2J82, 2022.  Bryan Winkel, 1-007-AntTunnelBuilding-ModelingScenario  , doi:\/10.25334\/DQRP-G032, 2022.  Bryan Winkel, 5-001-LSD-ModelingScenario.  , doi:\/10.25334\/CNEE-7J76, 2022.  Bryan Winkel, 7-010-MultipleDoses-ModelingScenario  , doi:\/10.25334\/CCW1-E736, 2022.   Communicable Disease Surveillance Center. 1978. News and Notes: Influenza in a Boarding School.  British Medical Journal 1 6112 586-590    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
