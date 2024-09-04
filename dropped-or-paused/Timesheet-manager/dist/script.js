const exportDataToJSON = require("./dataExporter");

/*
 * A simple React component
 */
class Application extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: "",
			activity: "",
			from: "",
			to: "",
			note: "",
			time: "",
			edditing: false,
			data: [],
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.deleteRecord = this.deleteRecord.bind(this);
		this.edditRecord = this.edditRecord.bind(this);
		this.confirmDeletion = this.confirmDeletion.bind(this);
		this.confirmEdditing = this.confirmEdditing.bind(this);
		this.clearFormData = this.clearFormData.bind(this);
		this.totalTime = this.totalTime.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	confirmDeletion(callback, index) {
		swal(
			{
				title: "Are you sure?",
				text: "Would you like to delete this document?",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes, delete it!",
				closeOnConfirm: false,
				closeOnCancel: false,
			},

			(deletionConfirmed) => {
				if (deletionConfirmed) {
					callback(index);
					swal(
						"Deleted!",
						"Your document has been deleted.",
						"success"
					);
				} else {
					swal(
						"Cancelled!",
						"Your document  was not deleted.",
						"error"
					);
				}
			}
		);
	}

	confirmEdditing(callback, index, clearData) {
		swal(
			{
				title: "Are you sure?",
				text: "Would you like to eddit this document?",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: "#DD6B55",
				confirmButtonText: "Yes!",
				closeOnConfirm: false,
				closeOnCancel: false,
			},

			(edditingConfirmed) => {
				if (edditingConfirmed) {
					callback(index);
					this.setState({ edditing: false });
					clearData();
					swal(
						"Editted!",
						"Your document has been Editted.",
						"success"
					);
				} else {
					this.setState({ edditing: false });
					swal(
						"Cancelled!",
						"Your document  was not Editted.",
						"error"
					);
				}
			}
		);
	}

	clearFormData() {
		this.setState({
			project: "",
			activity: "",
			from: "",
			to: "",
			note: "",
			billable: "",
			time: "",
		});
	}
	deleteRecord(index) {
		let temp = this.state.data;
		this.setState({ data: temp.filter((newInfo, i) => i !== index) });
	}
	edditRecord(index) {
		let temp = this.state.data;
		this.setState({
			data: temp.map((oldInfo, pos) => {
				if (pos === index) {
					return this.state;
				}
				return oldInfo;
			}),
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		const time = Math.abs(
			parseInt(this.state.to) - parseInt(this.state.from)
		);
		this.state.time = time;
		if (this.state.edditing) {
			this.confirmEdditing(
				this.edditRecord,
				this.state.index,
				this.clearFormData
			);
			return null;
		}
		this.state.data.push(this.state);
		this.setState({ data: this.state.data });
		this.clearFormData();
	}
	totalTime() {
		let sum = 0;
		this.state.data.forEach((info) => {
			sum += info.time;
		});
		return sum;
	}

	render() {
		return /*#__PURE__*/ React.createElement(
			"div",
			null /*#__PURE__*/,
			React.createElement(
				"h1",
				{
					style: {
						fontSize: "80px",
						padding: "40px 0 40px 0",
					},
				},
				"Time Sheet"
			) /*#__PURE__*/,

			React.createElement(
				"p",
				null,
				"Test out by entering data.  You can after delete or edit."
			) /*#__PURE__*/,

			React.createElement("br", null),
			!this.state.edditing /*#__PURE__*/
				? React.createElement(
						"form",
						{
							className: "report",
							onSubmit: this.handleSubmit,
						} /*#__PURE__*/,
						React.createElement(
							"div",
							{ className: "col-left" } /*#__PURE__*/,
							React.createElement(
								"label",
								null,
								"Project" /*#__PURE__*/,

								React.createElement(
									"select",
									{
										name: "project",
										value: this.state.project,
										onChange: this.handleChange,
										id: "project",
									} /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "" },
										"Please select project..."
									) /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "academic" },
										"Academic"
									) /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "industry" },
										"Industry"
									)
								)
							) /*#__PURE__*/,

							React.createElement(
								"label",
								null,
								"Activity",

								React.createElement("textarea", {
									name: "activity",
									value: this.state.activity,
									onChange: this.handleChange,
									id: "activity",
								})
							) /*#__PURE__*/,

							React.createElement(
								"div",
								{ className: "pair" } /*#__PURE__*/,
								React.createElement(
									"label",
									{ className: "pair-left" },
									"From" /*#__PURE__*/,

									React.createElement("input", {
										type: "time",
										value: this.state.from,
										onChange: this.handleChange,
										name: "from",
										id: "from",
									})
								) /*#__PURE__*/,

								React.createElement(
									"label",
									{ className: "pair-right" },
									"To" /*#__PURE__*/,

									React.createElement("input", {
										type: "time",
										value: this.state.to,
										onChange: this.handleChange,
										name: "to",
										id: "to",
									})
								)
							) /*#__PURE__*/
						) /*#__PURE__*/,

						React.createElement(
							"div",
							{ className: "col-right" } /*#__PURE__*/,
							React.createElement(
								"label",
								null,
								"Note / Reflection" /*#__PURE__*/,

								React.createElement("textarea", {
									name: "note",
									value: this.state.note,
									onChange: this.handleChange,
									id: "note",
									cols: "30",
									rows: "10",
								})
							) /*#__PURE__*/,

							React.createElement(
								"button",
								{ type: "submit" },
								"Save"
							)
						)
				  ) /*#__PURE__*/
				: React.createElement(
						"form",
						{
							className: "report",
							onSubmit: this.handleSubmit,
						} /*#__PURE__*/,
						React.createElement(
							"div",
							{ className: "col-left" } /*#__PURE__*/,
							React.createElement(
								"label",
								null,
								"Project" /*#__PURE__*/,

								React.createElement(
									"select",
									{
										name: "project",
										value: this.state.project,
										onChange: this.handleChange,
										id: "project",
									} /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "" },
										"Please select project..."
									) /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "project1" },
										"Project 1"
									) /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "project2" },
										"Project 2"
									) /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "project3" },
										"Project 3"
									)
								)
							) /*#__PURE__*/,

							React.createElement(
								"label",
								null,
								"Activity" /*#__PURE__*/,

								React.createElement(
									"select",
									{
										name: "activity",
										value: this.state.activity,
										onChange: this.handleChange,
										id: "activity",
									} /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "" },
										"Please select activity..."
									) /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "activity1" },
										"Activity 1"
									) /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "activity2" },
										"Activity 2"
									) /*#__PURE__*/,
									React.createElement(
										"option",
										{ value: "activity3" },
										"Activity 3"
									)
								)
							) /*#__PURE__*/,

							React.createElement(
								"div",
								{ className: "pair" } /*#__PURE__*/,
								React.createElement(
									"label",
									{ className: "pair-left" },
									"From" /*#__PURE__*/,

									React.createElement("input", {
										type: "time",
										value: this.state.from,
										onChange: this.handleChange,
										name: "from",
										id: "from",
									})
								) /*#__PURE__*/,

								React.createElement(
									"label",
									{ className: "pair-right" },
									"To" /*#__PURE__*/,

									React.createElement("input", {
										type: "time",
										value: this.state.to,
										onChange: this.handleChange,
										name: "to",
										id: "to",
									})
								)
							) /*#__PURE__*/,

							React.createElement(
								"label",
								{ className: "checkbox" } /*#__PURE__*/,
								React.createElement(
									"span",
									null,
									"Billable"
								) /*#__PURE__*/,
								React.createElement("input", {
									type: "checkbox",
									value: this.state.checkbox,
									onChange: this.handleChange,
									name: "billable",
									id: "billable",
								})
							)
						) /*#__PURE__*/,

						React.createElement(
							"div",
							{ className: "col-right" } /*#__PURE__*/,
							React.createElement(
								"label",
								null,
								"Note" /*#__PURE__*/,

								React.createElement("textarea", {
									name: "note",
									value: this.state.note,
									onChange: this.handleChange,
									id: "note",
									cols: "30",
									rows: "10",
								})
							) /*#__PURE__*/,

							React.createElement(
								"button",
								{ type: "submit" },
								"Save"
							)
						)
				  ),

			this.state.data[0] /*#__PURE__*/
				? React.createElement(
						"table",
						null /*#__PURE__*/,
						React.createElement(
							"caption",
							null,
							null
						) /*#__PURE__*/,
						React.createElement(
							"thead",
							null /*#__PURE__*/,
							React.createElement(
								"tr",
								null /*#__PURE__*/,
								React.createElement(
									"th",
									null,
									"Project"
								) /*#__PURE__*/,
								React.createElement(
									"th",
									null,
									"Activity"
								) /*#__PURE__*/,
								React.createElement(
									"th",
									null,
									"From"
								) /*#__PURE__*/,
								React.createElement(
									"th",
									null,
									"To"
								) /*#__PURE__*/,
								React.createElement(
									"th",
									null,
									"Note"
								) /*#__PURE__*/,
								React.createElement(
									"th",
									null,
									"Action"
								) /*#__PURE__*/,
								React.createElement("th", null, "Delete")
							)
						) /*#__PURE__*/,

						React.createElement(
							"tfoot",
							null /*#__PURE__*/,
							React.createElement(
								"tr",
								null /*#__PURE__*/,
								React.createElement(
									"td",
									{ colspan: "7" },
									"Sum total time: ",
									this.totalTime()
								)
							)
						) /*#__PURE__*/,

						React.createElement(
							"tbody",
							null,
							this.state.data.map((info, index /*#__PURE__*/) =>
								React.createElement(
									"tr",
									{ key: index } /*#__PURE__*/,
									React.createElement(
										"td",
										null,
										info.project
									) /*#__PURE__*/,
									React.createElement(
										"td",
										null,
										info.activity
									) /*#__PURE__*/,
									React.createElement(
										"td",
										null,
										info.from
									) /*#__PURE__*/,
									React.createElement(
										"td",
										null,
										info.to
									) /*#__PURE__*/,
									React.createElement(
										"td",
										null,
										info.note
									) /*#__PURE__*/,
									React.createElement(
										"td",
										null,
										/*#__PURE__*/ React.createElement(
											"button",
											{
												onClick: () => {
													this.setState({
														edditing: true,
														index,
													});
													this.clearFormData();
													swal(
														"please go back to form and edit"
													);
												},
											},
											"Edit"
										)
									) /*#__PURE__*/,

									React.createElement(
										"td",
										{
											style: { color: "black" },
										} /*#__PURE__*/,
										React.createElement(
											"button",
											{
												onClick: () => {
													this.confirmDeletion(
														this.deleteRecord,
														index
													);
												},
											},
											"Delete"
										)
									)
								)
							)
						)
				  )
				: ""
		);
	}
	exportDataToJSONFile() {
		const data = this.state.data;
		const filename = "exportedData.json";

		exportDataToJSON(data, filename);
	}

	render() {
		return (
			<div>
				<h1>Time Sheet</h1>
				{/* Your other JSX elements here */}
				<form className="report" onSubmit={this.handleSubmit}>
					{/* Form fields and other elements */}
					<button type="submit">Save to JSON</button>
				</form>
				{/* Table and other elements */}
				<table>{/* Table rows and cells */}</table>=
				<button onClick={() => this.exportDataToJSONFile()}>
					Export Data to JSON
				</button>
			</div>
		);
	}
}

/*
 * Render the above component into the div#app
 */
React.render(
	/*#__PURE__*/ React.createElement(Application, null),
	document.getElementById("app")
);
