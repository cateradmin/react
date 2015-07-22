/**
 * page structure
 * 
 * -page
 * 	|-- North
 *  |	|--MyInput(many)
 * 	|-- Center
 * 	|   |-- Search
 * 	|	|--	MyTable
 * 	|		|--	TableRow
 * 
 *
 * 
 */



var Page = React.createClass({
	getInitialState:function(){
		return {datas:[]}
	},
	updateData:function(obj){
		var datas = this.state.datas;
		datas.push(obj);
		this.setState({
			datas:datas,
			srcData:datas
		});
	},
	onChange:function(value){
		var filterData = [];
		var srcData = this.state.srcData;
		if (value){
			if (srcData.length > 1){
				srcData.map(function(data){
					if (data.username.indexOf(value) != -1 || data.password.indexOf(value) != -1 ||data.desc.indexOf(value) != -1){
						filterData.push(data);
					}		
				})
			}
		} else {
			filterData = this.state.srcData;
		}
		this.setState({
			datas:filterData
		});
	},
	render:function(){
		return <div>
					<North onClick={this.updateData}/>
					<Center datas={this.state.datas} onChange={this.onChange}/>
			   </div>;
	}
});

var North = React.createClass({
	getInitialState:function(){
		return {
			display:"this is north",
			notEmptly:''
		}
	},
	handleOnClick: function(){
		var username = React.findDOMNode(this.refs.usrname).value;
		var password = React.findDOMNode(this.refs.password).value;
		var desc = React.findDOMNode(this.refs.desc).value;
		if (!username || !password){
			this.setState({
				notEmptly:"username and password is not null"
			})
		} else {
			this.setState({
				notEmptly:""
			})
			var obj={username:username,password:password,desc:desc}
			this.props.onClick(obj);
		}

	},
	render: function(){
		return <div style={{background:'#F2F2F2',height:"110"}}>
					username:<MyInput type="letter" ref="usrname" />（only input:a-zA-Z）<br/>
					password:<MyInput type="num" ref="password" />（only input num:0-9）<br/>
					desc:<MyInput ref="desc" />（no limit）<br/>
					<label style={{color:"red"}}>{this.state.notEmptly}</label><br/>
					<input type="button" value="add" style={{width:'50px'}} onClick={this.handleOnClick}/>
				</div>
	}
}); 

var Center = React.createClass({
	getInitialState:function(){
		return {
			display:"this is Center"
		}
	},
	onChange:function(value){
		this.props.onChange(value);
	},
	render: function(){
		return <div style={{background:'#F5F5F5',height:"500"}}>
					<Search searchChange={this.props.onChange} />
					<MyTable header={["username","password","desc"]} rows={this.props.datas} />
				</div>
	}
});
 
var MyInput = React.createClass({
	getInitialState:function(){
		return {
			value:""
		}
	},
	handleChage:function(e){
		//此处可以做些过滤处理
		var reg;
		var inputValue = e.target.value;
		var oldValue = this.state.value;
		if (this.props.type == "letter"){
			reg=/^[a-zA-Z]*$/;
		} else if (this.props.type == "num"){
			reg=/^[0-9]*$/;
		} else if (this.props.type == "string"){
			
		}
		if (reg){
			if (reg.test(inputValue)){
				this.setState({
					value:inputValue
				})
			}
		} else {
			this.setState({
				value:inputValue
			})
		}	
	},
	render:function(){
		return <input name="username" id="username" value={this.state.value} onChange={this.handleChage} />
	}
})

var MyTable = React.createClass({
	render: function(){
		var header = this.props.header;
		var rows = this.props.rows;
		return <table>
                <thead>
                    <tr>
                    	<th></th>
	                    {
	                        header.map(function(head){
								return <th>{head}</th>
							})
	                    }
                    </tr>
                </thead>
                <tbody>
                	{
                		rows.map(function(row,index){
							return <TableRow data={row} index={index+1}/>
						})
                	}
                </tbody>
            </table>;
	}
}); 

var TableRow = React.createClass({
	render:function(){
		return <tr>
				<td>{this.props.index}</td>
                <td>{this.props.data.username}</td>
                <td>{this.props.data.password}</td>
                <td>{this.props.data.desc}</td>
           	   </tr>
	}
});

var Search = React.createClass({
	handleOnChange:function(e){
		this.props.searchChange(e.target.value);
	},
	render:function(){
		return <input onChange={this.handleOnChange} />
	}
});

React.render(<Page />,document.getElementById("content"));