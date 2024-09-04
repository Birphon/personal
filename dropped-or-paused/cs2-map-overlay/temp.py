from scipy.optimize import minimize

# Coefficients of the objective function to minimize (negative of weights for each nutrient)
c = [10, 4, 10, 10, 4]  

# Coefficients of the inequality constraint (calorie limit)
A = [[700, 400, 400, 0, 0]]  
b = [3125]

# Bounds for each variable (non-negativity constraint)
x_bounds = (0, None)
y_bounds = (0, None)
z_bounds = (0, None)

result = minimize(lambda x: -sum(c[i] * x[i] for i in range(len(c))), x0=[0, 0, 0, 0, 0],
                  constraints={'type': 'ineq', 'fun': lambda x: b[0] - sum(A[0][i] * x[i] for i in range(len(c)))},
                  bounds=[x_bounds, y_bounds, z_bounds, y_bounds, z_bounds])

# Extract the optimal values
x_optimal = result.x[0]
y_optimal = result.x[1]
z_optimal = result.x[2]

print(f"Optimal portions - Topped Porridge: {x_optimal}, Charred Fish: {y_optimal}, Charred Meat: {z_optimal}")
