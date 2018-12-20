package lt.sventes.miri.servisai;

public class SventesOfService {
	
		private String picture;
	    private String title;
	    private String description;
	    private String type;
	    
	    public SventesOfService() { }
	    
	    public SventesOfService(String picture, String title, String description, String type) {
	    	this.picture = picture;
	    	this.title = title;
	    	this.description = description;
	    	this.type = type;
		}
	    
		public String getPicture() {
			return picture;
		}
		public void setPicture(String picture) {
			this.picture = picture;
		}
		public String getTitle() {
			return title;
		}
		public void setTitle(String title) {
			this.title = title;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getType() {
			return type;
		}
		public void setType(String type) {
			this.type = type;
		}
	}